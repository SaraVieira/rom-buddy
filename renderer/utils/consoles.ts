import gc from '../assets/consoles/Nintendo GameCube Controller 600dpi.png'
import gameboy from '../assets/consoles/Nintendo Gameboy 600dpi.png'
import gg from '../assets/consoles/Sega Game Gear 600dpi.png'
import ngp from '../assets/consoles/SNK Neo Geo Pocket Color 600dpi.png'
import intellivision from '../assets/consoles/Mattle Intellivision Controller 600dpi.png'
import gbc from '../assets/consoles/Nintendo Gameboy Color yellow 600dpi.png'
import pokemini from '../assets/consoles/Nintendo Pokemon Blue 600dpi.png'
import ms from  '../assets/consoles/Sega Master System Controller 600dpi.png'
import snes from '../assets/consoles/Nintendo PAL Super Nintendo Controller.png'
import nec from '../assets/consoles/NEC TurboGrafx 16 Controller 600dpi.png'
import c64 from '../assets/consoles/Commodore 64 Keyboard 600dpi.png'
import switchConsole from '../assets/consoles/Nintendo Switch 600dpi.png'
import vb from '../assets/consoles/Nintendo Virtual Boy Controller 600dpi.png'
import bandaiRed from '../assets/consoles/Bandai Wonderswan Color Crystal Red Wine 600dpi.png'
import xbox360 from '../assets/consoles/Xbox 360 Controller 600dpi.png'
import arcadeStickMortalKombat from '../assets/consoles/Arcade Stick Street mortal kombat 600dpi.png';
import ThreeDO from "../assets/consoles/Panasonic 3DO Controller 600dpi.png"
import amiga from '../assets/consoles/Commodore 64 Keyboard 600dpi.png'
import atari2600 from '../assets/consoles/Atari 2600 Controller 600dpi.png'
import atari7800 from '../assets/consoles/Atari 7800 600dpi.png'
import jaguar from '../assets/consoles/Atari Jaguar 600dpi.png'
import lynx from '../assets/consoles/Atari Lynx 600dpi.png'
import commodore64 from '../assets/consoles/Commodore 64 Keyboard 600dpi.png'
import colecovision from '../assets/consoles/Coleco Colecovision Controller 600dpi.png'
import arcadeST from '../assets/consoles/Arcade Stick Street Fighter 600dpi.png'
import dreamcast from '../assets/consoles/Sega Dreamcast Controller A 600dpi.png'
import nes from '../assets/consoles/Nintendo NES Controller 600dpi.png'
import ps2 from "../assets/consoles/Sony Playstation DaulShock 2 Controller 600dpi.png"
import ps3 from '../assets/consoles/Sony Playstation DaulShock 3 Controller 600dpi.png'
import ps4 from '../assets/consoles/Sony Playstation DaulShock 4 Controller 600dpi.png'
import psp from '../assets/consoles/Sony PSP 600dpi.png'
import psvita from '../assets/consoles/Sony Playstation Vita 600dpi.png'
import psx from '../assets/consoles/Sony PlayStation Daul Analog Controller 600dpi.png'
import staurn from '../assets/consoles/Sega Saturn Controller C 600dpi.png'
import md from '../assets/consoles/Sega Mega Drive Controller A 600dpi.png'
import arcadeBlack from '../assets/consoles/Arcade Stick Black 600dpi.png'
import gw from '../assets/consoles/Nintendo Game & Watch Legend of Zelda 600dpi.png'
import arcadeBlackGray from '../assets/consoles/Arcade Stick Gray Black Red 600dpi.png'
import n3ds from '../assets/consoles/Nintendo 3DS 600dpi.png'
import ds from '../assets/consoles/Nintendo DS lite 600dpi.png'
import n64 from '../assets/consoles/Nintendo N64 Controller 600dpi.png'
import wii from '../assets/consoles/Nintendo Wii Controller 600dpi.png'
import wiiu from '../assets/consoles/Nintendo Wii U 600dpi.png'
import xbox from '../assets/consoles/Xbox Controller 600dpi.png'
import bandaiBlue from '../assets/consoles/Bandai Wonderswan Color Crystal Blue Violet 600dpi.png'
import gba from '../assets/consoles/Nintendo Game Boy Advance 600dpi.png'
import snk from '../assets/consoles/SNK NEO GEO Arcade Stick 4 Button 600dpi.png'
import neogeocd from '../assets/consoles/SNK Neo Geo CD 600dpi.png'

export const consoles = [
  {
    name: "3DO Interactive Multiplayer",
    folderNames: { emulationStation: "3DO", miyoo: "PANASONIC" },
    image: ThreeDO,
  },
  {
    name: "Adventure Game Studio Game Engine",
    folderNames: { emulationStation: "ags" },
    image: null,
  },
  {
    name: "Commodore Amiga",
    folderNames: { emulationStation: "amiga", miyoo: "AMIGA" },
    image: amiga,
  },
  {
    name: "Commodore Amiga 1200",
    folderNames: { emulationStation: "amiga1200", miyoo: "AMIGA" },
    image: amiga,
  },
  {
    name: "Commodore Amiga 600",
    folderNames: { emulationStation: "amiga600", miyoo: "AMIGA" },
    image: amiga,
  },
  {
    name: "Commodore Amiga CD32",
    folderNames: { emulationStation: "amigacd32", miyoo: "AMIGACD" },
    image: amiga,
  },
  {
    name: "Amstrad CPC",
    folderNames: { emulationStation: "amstradcpc", miyoo: "CPC" },
    image: null,
  },
  {
    name: "Google Android",
    folderNames: { emulationStation: "android" },
    image: null,
  },
  {
    name: "Apple II",
    folderNames: { emulationStation: "apple2" },
    image: null,
  },
  {
    name: "Apple IIGS",
    folderNames: { emulationStation: "apple2gs" },
    image: null,
  },
  {
    name: "Arcade",
    folderNames: { emulationStation: "arcade", miyoo: "ARCADE" },
    image: arcadeStickMortalKombat,
  },
  {
    name: "Emerson Arcadia 2001",
    folderNames: { emulationStation: "arcadia" },
    image: null,
  },
  {
    name: "Arduboy Miniature Game System",
    folderNames: { emulationStation: "arduboy" },
    image: null,
  },
  {
    name: "Bally Astrocade",
    folderNames: { emulationStation: "astrocde" },
    image: null,
  },
  {
    name: "Atari 2600",
    folderNames: { emulationStation: "atari2600", miyoo: "ATARI" },
    image: atari2600,
  },
  {
    name: "Atari 5200",
    folderNames: { emulationStation: "atari5200", miyoo: "FIFTYTWOHUNDRED" },
    image: null,
  },
  {
    name: "Atari 7800 ProSystem",
    folderNames: {
      emulationStation: "atari7800",
      miyoo: "SEVENTYEIGHTHUNDRED",
    },
    image: atari7800,
  },
  {
    name: "Atari 800",
    folderNames: { emulationStation: "atari800", miyoo: "EIGHTHUNDRED" },
    image: null,
  },
  {
    name: "Atari Jaguar",
    folderNames: {
      emulationStation: "atarijaguar",
      miyoo: "JAGUAR",
    },
    image: jaguar,
  },
  {
    name: "Atari Jaguar CD",
    folderNames: {
      emulationStation: "atarijaguarcd",
    },
    image: jaguar,
  },
  {
    name: "Atari Lynx",
    folderNames: {
      emulationStation: "atarilynx",
      miyoo: "LYNX",
    },
    image: lynx,
  },
  {
    name: "Atari ST",
    folderNames: {
      emulationStation: "atarist",
      miyoo: "ATARIST",
    },
    image: null,
  },
  {
    name: "Atari XE",
    folderNames: {
      emulationStation: "atarixe",
    },
    image: null,
  },
  {
    name: "Sammy Corporation Atomiswave",
    folderNames: {
      emulationStation: "atomiswave",
    },
    image: null,
  },
  {
    name: "Acorn Computers BBC Micro",
    folderNames: {
      emulationStation: "bbcmicro",
    },
    image: null,
  },
  {
    name: "Commodore 64",
    folderNames: {
      emulationStation: "c64",
      miyoo: "COMMODORE",
    },
    image: commodore64,
  },
  {
    name: "Cave Story",
    folderNames: {
      emulationStation: "cavestory",
    },
    image: null,
  },
  {
    name: "Philips CD-i",
    folderNames: {
      emulationStation: "cdimono1",
    },
    image: null,
  },
  {
    name: "Commodore CDTV",
    folderNames: {
      emulationStation: "cdtv",
    },
    image: null,
  },
  {
    name: "ChaiLove Game Engine",
    folderNames: {
      emulationStation: "chailove",
    },
    image: null,
  },
  {
    name: "Fairchild Channel F",
    folderNames: {
      emulationStation: "channelf",
      miyoo: "FAIRCHILD",
    },
    image: null,
  },
  {
    name: "Tandy Color Computer",
    folderNames: {
      emulationStation: "coco",
    },
    image: null,
  },
  {
    name: "Coleco ColecoVision",
    folderNames: {
      emulationStation: "colecovision",
      miyoo: "COLECO",
    },
    image: colecovision,
  },
  {
    name: "Capcom Play System",
    folderNames: {
      emulationStation: "cps",
      miyoo: "CPS",
    },
    image: arcadeST,
  },
  {
    name: "Capcom Play System I",
    folderNames: {
      emulationStation: "cps1",
      miyoo: "CPS1",
    },
    image: arcadeST,
  },
  {
    name: "Capcom Play System II",
    folderNames: {
      emulationStation: "cps2",
      miyoo: "CPS2",
    },
    image: arcadeST,
  },
  {
    name: "Capcom Play System III",
    folderNames: {
      emulationStation: "cps3",
      miyoo: "CPS3",
    },
    image: arcadeST,
  },
  {
    name: "VTech CreatiVision",
    folderNames: {
      emulationStation: "crvision",
    },
    image: null,
  },
  {
    name: "Daphne Arcade LaserDisc Emulator",
    folderNames: {
      emulationStation: "cps3",
      miyoo: "DAPHNE",
    },
    image: null,
  },
  {
    name: "Doom",
    folderNames: {
      emulationStation: "doom",
    },
    image: null,
  },
  {
    name: "DOS (PC)",
    folderNames: {
      emulationStation: "dos",
      miyoo: "DOS",
    },
    image: null,
  },
  {
    name: "Dragon Data Dragon 32",
    folderNames: {
      emulationStation: "dragon32",
    },
    image: null,
  },
  {
    name: "Sega Dreamcast",
    folderNames: {
      emulationStation: "dreamcast",
    },
    image: dreamcast,
  },
  {
    name: "EasyRPG Game Engine",
    folderNames: {
      emulationStation: "easyrpg",
      miyoo: "EASYRPG",
    },
    image: null,
  },
  {
    name: "NES",
    folderNames: {
      emulationStation: ["nes", "famicon"],
      miyoo: ["FC"],
    },
    image: nes,
  },
  {
    name: "Sony Playstation 2",
    folderNames: {
      emulationStation: ["ps2"],
    },
    image: ps2,
  },
  {
    name: "Sony Playstation 3",
    folderNames: {
      emulationStation: ["ps3"],
    },
    image: ps3,
  },
  {
    name: "Sony Playstation 4",
    folderNames: {
      emulationStation: ["ps4"],
    },
    image: ps4,
  },
  {
    name: "Sony Playstation Portable",
    folderNames: {
      emulationStation: ["psp"],
    },
    image: psp,
  },
  {
    name: "Sony Playstation Vita",
    folderNames: {
      emulationStation: ["psvita"],
    },
    image: psvita,
  },
  {
    name: "Sony Playstation",
    folderNames: {
      emulationStation: ["psx"],
      miyoo: ["PS"],
    },
    image: psx,
  },
  {
    name: "Sega Saturn",
    folderNames: {
      emulationStation: ["saturn", "saturnjs"],
    },
    image: staurn,
  },
  {
    name: "Sega 32X",
    folderNames: {
      emulationStation: ["sega32x", "sega32xjp", "sega32xna"],
      miyoo: ["THIRTYTWOX"],
    },
    image: md,
  },
  {
    name: "Sega Genesis/Mega Drive",
    folderNames: {
      emulationStation: ["genesis", "megadrive", "megadrivejp"],
      miyoo: ["MD"],
    },
    image: md,
  },
  {
    name: "Sega CD",
    folderNames: {
      emulationStation: ["megacd", "megacdjp"],
      miyoo: ["segacd"]
    },
    image: md,
  },
  {
    name: "Sega SG-1000",
    folderNames: {
      emulationStation: ["sg-1000"],
      miyoo: ["SEGASGONE"]
    },
    image:null,
  },
  {
    name: "FinalBurn Alpha",
    folderNames: {
      emulationStation: ["fba"],
      miyoo: ["ARCADE"],
    },
    image: arcadeBlack,
  },
  {
    name: "FinalBurn Neo",
    folderNames: {
      emulationStation: ["fbneo"],
      miyoo: ["ARCADE"],
    },
    image: arcadeBlack,
  },
  {
    name: "Nintendo Famicom Disk System",
    folderNames: {
      emulationStation: ["fds"],
      miyoo: ["FDS"],
    },
    image: nes,
  },
  {
    name: "Fujitsu FM Towns",
    folderNames: {
      emulationStation: ["fmtowns"],
    },
    image: null,
  },
  {
    name: "Future Pinball",
    folderNames: {
      emulationStation: ["fpinball"],
    },
    image: null,
  },
  {
    name: "Nintendo Famicom Disk System",
    folderNames: {
      emulationStation: ["gameandwatch"],
      miyoo: ["GW"],
    },
    image: gw,
  },
  {
    name: "Hartung Game Master",
    folderNames: {
      emulationStation: ["gmaster"],
    },
    image: null,
  },
  {
    name: "Amstrad GX4000",
    folderNames: {
      emulationStation: ["gx4000"],
    },
    image: null,
  },
  {
    name: "LCD Handheld Games",
    folderNames: {
      emulationStation: ["lcdgames"],
    },
    image: null,
  },
  {
    name: "LowRes NX Fantasy Console",
    folderNames: {
      emulationStation: ["lowresnx"],
    },
    image: null,
  },
  {
    name: "Lutro Game Engine",
    folderNames: {
      emulationStation: ["lutro"],
    },
    image: null,
  },
  {
    name: "Multiple Arcade Machine Emulator",
    folderNames: {
      emulationStation: ["mame"],
      miyoo: ["ARCADE"],
    },
    image: arcadeBlackGray,
  },
  {
    name: "AdvanceMAME",
    folderNames: {
      emulationStation: ["mame-advmame"],
      miyoo: ["ARCADE"],
    },
    image: arcadeBlackGray,
  },
  {
    name: "MAME4ALL",
    folderNames: {
      emulationStation: ["mame-mame4all"],
      miyoo: ["ARCADE"],
    },
    image: arcadeBlackGray,
  },
  {
    name: "Multi Emulator Super System",
    folderNames: {
      emulationStation: ["mess"],
    },
    image: null,
  },
  {
    name: "Nintendo 3DS",
    folderNames: {
      emulationStation: ["n3ds"],
    },
    image: n3ds,
  },
  {
    name: "Nintendo DS",
    folderNames: {
      emulationStation: ["ds"],
      miyoo: ["DS"]
    },
    image: ds,
  },
  {
    name: "Nintendo 64",
    folderNames: {
      emulationStation: ["n64"],
    },
    image: n64,
  },
  {
    name: "Nintendo 64DD",
    folderNames: {
      emulationStation: ["n64dd"],
    },
    image: n64,
  },
  {
    name: "Nintendo Wii",
    folderNames: {
      emulationStation: ["wii"],
    },
    image: wii,
  },
  {
    name: "Nintendo Wii U",
    folderNames: {
      emulationStation: ["wiiu"],
    },
    image: wiiu,
  },
  {
    name: "Microsoft Xbox",
    folderNames: {
      emulationStation: ["xbox"],
    },
    image: xbox,
  },
  {
    name: "Microsoft Xbox 360",
    folderNames: {
      emulationStation: ["xbox360"],
    },
    image: xbox360,
  },
  {
    name: "Sinclair ZX81",
    folderNames: {
      emulationStation: ["zx81"],
      miyoo: "ZXEIGHTYONE",
    },
    image: null,
  },
  {
    name: "Sinclair ZX Spectrum",
    folderNames: {
      emulationStation: ["zxspectrum"],
      miyoo: "ZXS",
    },
    image: null,
  },
  {
    name: "Sinclair ZX Spectrum Next",
    folderNames: {
      emulationStation: ["zxnext"],
    },
    image: null,
  },
  {
    name: "Infocom Z-machine",
    folderNames: {
      emulationStation: ["zmachine"],
    },
    image: null,
  },
  {
    name: "Sharp X68000",
    folderNames: {
      emulationStation: ["x68000"],
      miyoo: ["X68000"],
    },
    image: null,
  },
  {
    name: "WASM-4 Fantasy Console",
    folderNames: {
      emulationStation: ["wasm4"],
    },
    image: null,
  },
  {
    name: "VTech V.Smile",
    folderNames: {
      emulationStation: ["vsmile"],
    },
    image: null,
  },
  {
    name: "Visual Pinball",
    folderNames: {
      emulationStation: ["vpinball"],
    },
    image: null,
  },
  {
    name: "Solarus Game Engine",
    folderNames: {
      emulationStation: ["solarus"],
    },
    image: null,
  },
  {
    name: "Spectravideo",
    folderNames: {
      emulationStation: ["spectravideo"],
    },
    image: null,
  },
  {
    name: "Stratagus Game Engine",
    folderNames: {
      emulationStation: ["stratagus"],
    },
    image: null,
  },
  {
    name: "Bandai SuFami Turbo",
    folderNames: {
      emulationStation: ["sufami"],
    },
    image: null,
  },
  {
    name: "Epoch Super Cassette Vision",
    folderNames: {
      emulationStation: ["scv"],
    },
    image: null,
  },
  {
    name: "ScummVM Game Engine",
    folderNames: {
      emulationStation: ["scummvm"],
      miyoo: ["SCUMMVM"],
    },
    image: null,
  },
  {
    name: "Symbian",
    folderNames: {
      emulationStation: ["symbian"],
    },
    image: null,
  },
  {
    name: "Tano Dragon",
    folderNames: {
      emulationStation: ["tanodragon"],
    },
    image: null,
  },
  {
    name: "MGT SAM Coupé",
    folderNames: {
      emulationStation: ["samcoupe"],
    },
    image: null,
  },
  {
    name: "Casio PV-1000",
    folderNames: {
      emulationStation: ["pv1000"],
    },
    image: null,
  },
  {
    name: "IBM PC",
    folderNames: {
      emulationStation: ["pc"],
    },
    image: null,
  },
  {
    name: "Palm OS",
    folderNames: {
      emulationStation: ["palm"],
    },
    image: null,
  },
  {
    name: "Tangerine Computer Systems Oric",
    folderNames: {
      emulationStation: ["oric"],
    },
    image: null,
  },
  {
    name: "OpenBOR Game Engine",
    folderNames: {
      emulationStation: ["openbor"],
      miyoo: ["OPENBOR"],
    },
    image: null,
  },
  {
    name: "Sharp X1",
    folderNames: {
      emulationStation: ["x1"],
      miyoo: ["XONE"],
    },
    image: null,
  },
  {
    name: "Bandai WonderSwan",
    folderNames: {
      emulationStation: ["wonderswan"],
      miyoo: ["WS"],
    },
    image: bandaiBlue,
  },
  {
    name: "Bandai WonderSwan Color",
    folderNames: {
      emulationStation: ["wonderswancolor"],
      miyoo: ["WS"],
    },
    image: bandaiRed,
  },
  {
    name: "Nintendo Virtual Boy",
    folderNames: {
      emulationStation: ["virtualboy"],
      miyoo: ["VB"],
    },
    image: vb,
  },
  {
    name: "Philips Videopac G7000",
    folderNames: {
      emulationStation: ["videopac"],
      miyoo: ["ODYSSEY"],
    },
    image: null,
  },
  {
    name: "Commodore VIC-20",
    folderNames: {
      emulationStation: ["vic20"],
      miyoo: ["COMMODORE"],
    },
    image: c64,
  },
  {
    name: "Smith Engineering Vectrex",
    folderNames: {
      emulationStation: ["vectrex"],
      miyoo: ["VECTREX"],
    },
    image: null,
  },
  {
    name: "Uzebox Open Source Console",
    folderNames: {
      emulationStation: ["uzebox"],
      miyoo: ["UZEBOX"],
    },
    image: null,
  },
  {
    name: "Tandy TRS-80",
    folderNames: {
      emulationStation: ["trs-80"],
    },
    image: null,
  },
  {
    name: "Thomson TO8",
    folderNames: {
      emulationStation: ["to8"],
    },
    image: null,
  },
  {
    name: "TIC-80 Game Engine",
    folderNames: {
      emulationStation: ["tic80"],
      miyoo: ["TIC"],
    },
    image: null,
  },
  {
    name: "Texas Instruments TI-99",
    folderNames: {
      emulationStation: ["ti99"],
    },
    image: null,
  },
  {
    name: "Nintendo Switch",
    folderNames: {
      emulationStation: ["switch"],
    },
    image: switchConsole,
  },
  {
    name: "Super Nintendo",
    folderNames: {
      emulationStation: ["snes", "snesna", "sfc"],
      miyoo: ["SFC"],
    },
    image: snes,
  },
  {
    name: "NEC TurboGrafx-CD",
    folderNames: {
      emulationStation: ["tg-cd"],
      miyoo: ["PCECD"],
    },
    image: nec,
  },
  {
    name: "Watara Supervision",
    folderNames: {
      emulationStation: ["supervision"],
      miyoo: ["SUPERVISION"],
    },
    image: null,
  },
  {
    name: "NEC SuperGrafx",
    folderNames: {
      emulationStation: ["supergrafx"],
      miyoo: ["SGFX"],
    },
    image: nec,
  },
  {
    name: "NEC PC-8800 Series",
    folderNames: {
      emulationStation: ["pc88"],
    },
    image: null,
  },
  {
    name: "NEC PC-9800 Series",
    folderNames: {
      emulationStation: ["pc98"],
    },
    image: null,
  },
  {
    name: "PICO-8 Fantasy Console",
    folderNames: {
      emulationStation: ["pico8"],
      miyoo: ["PICO"],
    },
    image: null,
  },
  {
    name: "Nintendo Pokémon Mini",
    folderNames: {
      emulationStation: ["pokemini"],
      miyoo: ["POKE"],
    },
    image: pokemini,
  },
  {
    name: "Tiger Electronics Game.com",
    folderNames: {
      emulationStation: ["gamecom"],
    },
    image: null,
  },
  {
    name: "Sega Game Gear",
    folderNames: {
      emulationStation: ["gamegear"],
      miyoo: ["GG"],
    },
    image: gg,
  },
  {
    name: "Nintendo Game Boy",
    folderNames: {
      emulationStation: ["gb"],
      miyoo: ["GB"],
    },
    image: gameboy,
  },
  {
    name: "Nintendo Game Boy Advance",
    folderNames: {
      emulationStation: ["gba"],
      miyoo: ["GBA"],
    },
    image: gba,
  },
  {
    name: "Nintendo Game Boy Color",
    folderNames: {
      emulationStation: ["gbc"],
      miyoo: ["GBC"],
    },
    image: gbc,
  },
  {
    name: "Nintendo GameCube",
    folderNames: {
      emulationStation: ["gc"],
    },
    image: gc,
  },
  {
    name: "Mattel Electronics Intellivision",
    folderNames: {
      emulationStation: ["intellivision"],
      miyoo: ["INTELLIVISION"],
    },
    image: intellivision,
  },
  {
    name: "Sega Master System",
    folderNames: {
      emulationStation: ["mastersystem"],
      miyoo: ["MS"],
    },
    image: ms,
  },
  {
    name: "Sega Model 2",
    folderNames: {
      emulationStation: ["model2"],
    },
    image: null,
  },
  {
    name: "Sega Model 3",
    folderNames: {
      emulationStation: ["model3"],
    },
    image: null,
  },
  {
    name: "Thomson MO/TO Series",
    folderNames: {
      emulationStation: ["moto"],
    },
    image: null,
  },
  {
    name: "MSX",
    folderNames: {
      emulationStation: ["msx"],
      miyoo: ["MSX"],
    },
    image: null
  },
  {
    name: "MSX1",
    folderNames: {
      emulationStation: ["msx1"],
      miyoo: ["MSX"],
    },
    image: null
  },
  {
    name: "MSX2",
    folderNames: {
      emulationStation: ["msx2"],
      miyoo: ["MSX"],
    },
    image: null
  },
  {
    name: "Creatronic Mega Duck",
    folderNames: {
      emulationStation: ["megaduck"],
      miyoo: ["MEGADUCK"],
    },
    image: null
  },
  {
    name: "Apple Macintosh",
    folderNames: {
      emulationStation: ["macintosh"],
    },
    image: null
  },
  {
    name: "MSX Turbo R",
    folderNames: {
      emulationStation: ["msxturbor"],
    },
    image: null
  },
  {
    name: "M.U.G.E.N Game Engine",
    folderNames: {
      emulationStation: ["mugen"],
    },
    image: null
  },
  {
    name: "Othello Multivision",
    folderNames: {
      emulationStation: ["multivision"],
    },
    image: null
  },
  {
    name: "NEC TurboGrafx-16",
    folderNames: {
      emulationStation: ["tg16", "pcengine"],
      miyoo: ["PCE"]
    },
    image: nec
  },
  {
    name: "NEC TurboGrafx CD",
    folderNames: {
      emulationStation: ["pcenginecd"],
      miyoo: ["PCECD"]
    },
    image: nec
  },
  {
    name: "Sega NAOMI",
    folderNames: {
      emulationStation: ["naomi"],
    },
    image: null
  },
  {
    name: "Sega NAOMI CD-ROM",
    folderNames: {
      emulationStation: ["naomigd"],
    },
    image: null
  },
  {
    name: "SNK Neo Geo",
    folderNames: {
      emulationStation: ["neogeo"],
      miyoo: ["NEOGEO"]
    },
    image: snk
  },
  {
    name: "SNK Neo Geo CD",
    folderNames: {
      emulationStation: ["neogeocd", "neogeocdjp"],
      miyoo: ["NEOCD"]
    },
    image: neogeocd
  },
  {
    name: "SNK Neo Geo Pocket",
    folderNames: {
      emulationStation: ["ngp"],
      miyoo: ["NGP"]
    },
    image: ngp
  },
  {
    name: "SNK Neo Geo Pocket Color",
    folderNames: {
      emulationStation: ["ngpc"],
      miyoo: ["NGP"]
    },
    image: ngp
  },
  {
    name: "Magnavox Odyssey2",
    folderNames: {
      emulationStation: ["odyssey2"],
      miyoo: ["ODYSSEY"]
    },
    image: null
  },
  {
    name: "NEC PC-FX",
    folderNames: {
      emulationStation: ["pcfx"],
      miyoo: ["PCFX"]
    },
    image: null
  },
  {
    name: "Nintendo Satellaview",
    folderNames: {
      emulationStation: ["satellaview"],
      miyoo: ["SATELLAVIEW"]
    },
    image: null
  },
  {
    name: "Nintendo Super Game Boy",
    folderNames: {
      emulationStation: ["sgb"],
      miyoo: ["SGB"]
    },
    image: null
  },
];
