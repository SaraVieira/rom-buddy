// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use reqwest::header::{HeaderMap, HeaderValue, CONTENT_TYPE, ORIGIN, REFERER, USER_AGENT};
use std::{
    collections::HashMap,
    fs::{self},
};
use walkdir::{DirEntry, WalkDir};

fn get_envs() -> HashMap<String, String> {
    let file = fs::read_to_string("../.env").expect("Should have been able to read the file");

    serde_json::from_str::<HashMap<String, String>>(&file).unwrap()
}

#[tauri::command]
fn get_user_roms() -> Vec<String> {
    fn is_hidden(entry: &DirEntry) -> bool {
        entry
            .file_name()
            .to_str()
            .map(|s| s.starts_with("."))
            .unwrap_or(false)
    }

    let walker = WalkDir::new("/Volumes/Miyoo/Roms").into_iter();
    // for entry in walker.filter_entry(|e| !is_hidden(e)) {
    //     println!(
    //         "{} - {}",
    //         entry.unwrap().path().display(),
    //         &entry.unwrap().ty().display()
    //     );
    // }
    let paths = fs::read_dir("/Volumes/Miyoo/Roms").unwrap();
    let mut folder_paths: Vec<String> = vec![];

    for path in paths {
        let current_path = path.unwrap().path();
        if current_path.is_dir() {
            folder_paths.push(current_path.display().to_string());
        }
    }

    folder_paths
}

#[tauri::command]
fn get_user_retro_summary(username: &str) -> String {
    let envs = get_envs();
    let resp = reqwest::blocking::get(format!(
        "https://retroachievements.org/API/API_GetUserRecentlyPlayedGames.php?z={}&y={}&u={}",
        envs["API_USERNAME"], envs["API_KEY"], username
    ))
    .unwrap()
    .text()
    .unwrap();
    format!("{:#?}", resp)
}

#[tauri::command]
fn get_how_game(body: String) -> String {
    let mut headers = HeaderMap::new();
    headers.insert(USER_AGENT, HeaderValue::from_static("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"));
    headers.insert(CONTENT_TYPE, HeaderValue::from_static("application/json"));
    headers.insert(
        ORIGIN,
        HeaderValue::from_static("https://howlongtobeat.com/"),
    );
    headers.insert(
        REFERER,
        HeaderValue::from_static("https://howlongtobeat.com/"),
    );
    let client = reqwest::blocking::Client::new();
    let rsp = client
        .post(
            "
    https://howlongtobeat.com/api/search",
        )
        .body(body)
        .headers(headers)
        .send()
        .unwrap()
        .text()
        .unwrap();
    rsp
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_user_retro_summary,
            get_how_game,
            get_user_roms
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
