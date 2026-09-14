import { FormEvent, useEffect, useRef, useState } from "react";
import "./rapidFlier.css";

type Submission = {
  answer: string;
  isCorrect: boolean;
  isDuplicate: boolean;
  canonicalAnswer?: string;
  duplicateOf?: string;
};

const category = "things that fly";

// Add future canonical answers to this one list. Aliases belong in alternativeNames.
const validAnswers: string[] = [
  "abert's towhee",
  "acorn woodpecker",
  "african moon moth",
  "airplane",
  "airship",
  "allen's hummingbird",
  "american avocet",
  "american bittern",
  "american black duck",
  "american coot",
  "american crow",
  "american goldfinch",
  "american kestrel",
  "american redstart",
  "american robin",
  "american tree sparrow",
  "american white pelican",
  "american wigeon",
  "american woodcock",
  "anhinga",
  "antlion",
  "aphid",
  "aplomado falcon",
  "arctic tern",
  "ash-throated flycatcher",
  "asian swallowtail",
  "atlas moth",
  "atlantic puffin",
  "anna's hummingbird",
  "autogyro",
  "bald eagle",
  "balloon",
  "baltimore oriole",
  "band-tailed pigeon",
  "bank swallow",
  "barn owl",
  "barn swallow",
  "barrow's goldeneye",
  "bat",
  "bay-breasted warbler",
  "bee",
  "beetle",
  "belted kingfisher",
  "bewick's wren",
  "biplane",
  "bird",
  "black-and-white warbler",
  "black-bellied plover",
  "black-billed cuckoo",
  "black-capped chickadee",
  "black-chinned hummingbird",
  "black-headed grosbeak",
  "black-necked stilt",
  "black phoebe",
  "black scoter",
  "black swift",
  "black tern",
  "blackburnian warbler",
  "blackpoll warbler",
  "blimp",
  "blue grosbeak",
  "blue jay",
  "blue-gray gnatcatcher",
  "blue-headed vireo",
  "blue-winged teal",
  "blue-winged warbler",
  "bobolink",
  "bomber",
  "bumblebee",
  "butterfly",
  "buzzard",
  "cabbage white",
  "cackling goose",
  "caddisfly",
  "california condor",
  "calliope hummingbird",
  "canada goose",
  "canada warbler",
  "canvasback",
  "cape may warbler",
  "cardinal",
  "cargo plane",
  "carolina chickadee",
  "carolina wren",
  "caspian tern",
  "cattle egret",
  "cedar waxwing",
  "cerulean warbler",
  "chestnut-sided warbler",
  "chickadee",
  "chimney swift",
  "chinook helicopter",
  "cicada",
  "cliff swallow",
  "clouded sulphur",
  "cockatoo",
  "cockchafer",
  "cockroach",
  "common grackle",
  "common loon",
  "common merganser",
  "common nighthawk",
  "common raven",
  "common tern",
  "condor",
  "cooper's hawk",
  "cormorant",
  "crane",
  "crane fly",
  "crow",
  "cuckoo",
  "curlew",
  "cypress sphinx",
  "cabbage moth",
  "cabbage looper",
  "carpenter bee",
  "carrion crow",
  "cicada killer",
  "crimson rosella",
  "damselfly",
  "dark-eyed junco",
  "dark-eyed white-eye",
  "dark-rumped petrel",
  "dartford warbler",
  "de havilland comet",
  "de havilland mosquito",
  "deer fly",
  "delta-wing aircraft",
  "desert locust",
  "diamond dove",
  "diamondback moth",
  "dickcissel",
  "diptera",
  "diving petrel",
  "dobsonfly",
  "domestic pigeon",
  "donkey orchid bee",
  "double-crested cormorant",
  "dove",
  "downy woodpecker",
  "dragonfly",
  "drone",
  "drone fly",
  "drongo",
  "duck",
  "dunlin",
  "dung beetle",
  "dusky flycatcher",
  "dusky grouse",
  "dusky lory",
  "dusky-capped flycatcher",
  "dusky-winged woodpecker",
  "dwarf honey bee",
  "dwarf kingfisher",
  "dwarf swiftlet",
  "dytiscid beetle",
  "darner",
  "death's-head hawkmoth",
  "dogface butterfly",
  "eagle",
  "eagle owl",
  "eared dove",
  "eared grebe",
  "earwig",
  "eastern bluebird",
  "eastern bluebonnet",
  "eastern cicada killer",
  "eastern imperial eagle",
  "eastern kingbird",
  "eastern meadowlark",
  "eastern phoebe",
  "eastern screech-owl",
  "eastern spinebill",
  "eastern tiger swallowtail",
  "eastern towhee",
  "eastern wood-pewee",
  "egyptian fruit bat",
  "egyptian goose",
  "eider",
  "elephant hawk-moth",
  "emerald ash borer",
  "emerald dove",
  "emerald moth",
  "emperor dragonfly",
  "emperor goose",
  "emperor moth",
  "emu-wren",
  "epauletted fruit bat",
  "european bee-eater",
  "european goldfinch",
  "european green woodpecker",
  "european hornet",
  "european nightjar",
  "european robin",
  "european roller",
  "european starling",
  "european swallowtail",
  "european swift",
  "evening grosbeak",
  "fairy tern",
  "falcon",
  "fantail",
  "feather-legged fly",
  "ferruginous hawk",
  "fieldfare",
  "fighter aircraft",
  "figbird",
  "finch",
  "firefly",
  "fish crow",
  "fisher's lovebird",
  "fishing bat",
  "flame robin",
  "flamingo",
  "flesh fly",
  "flightless cormorant moth",
  "flower chafer",
  "flower fly",
  "fly",
  "flycatcher",
  "flying fox",
  "flying squirrel moth",
  "flying wing",
  "forest kingfisher",
  "fork-tailed flycatcher",
  "fork-tailed swift",
  "four-spotted chaser",
  "franklin's gull",
  "freckled duck",
  "frigatebird",
  "fringe-toed bat",
  "fritillary butterfly",
  "frogmouth",
  "fruit bat",
  "fruit fly",
  "fulmar",
  "fulvous whistling-duck",
  "funereal duskywing",
  "funnel-web spider wasp",
  "gadfly",
  "gadwall",
  "gallinule",
  "gannet",
  "garden tiger moth",
  "geese",
  "ghost bat",
  "giant honey bee",
  "giant swallowtail",
  "glider",
  "glossy ibis",
  "gnat",
  "gnatcatcher",
  "goat moth",
  "golden eagle",
  "golden-crowned kinglet",
  "golden-winged warbler",
  "goldfinch",
  "goliath beetle",
  "goose",
  "goshawk",
  "grasshopper",
  "grasshopper sparrow",
  "gray catbird",
  "gray hawk",
  "gray-headed flying fox",
  "great black-backed gull",
  "great blue heron",
  "great crested flycatcher",
  "great egret",
  "great gray owl",
  "great horned owl",
  "great kiskadee",
  "great-tailed grackle",
  "greater scaup",
  "greater white-fronted goose",
  "greater yellowlegs",
  "green darner",
  "green heron",
  "green june beetle",
  "green lacewing",
  "green-winged teal",
  "grebe",
  "grackle",
  "grosbeak",
  "grouse",
  "gull",
  "gypsy moth",
  "gyrfalcon",
  "hairy woodpecker",
  "hammer-headed fruit bat",
  "harlequin duck",
  "harris's hawk",
  "harris's sparrow",
  "harrier",
  "hawk",
  "hawk moth",
  "helicopter",
  "helicopter damselfly",
  "helicopter seed",
  "herald petrel",
  "hercules beetle",
  "hermit thrush",
  "heron",
  "herring gull",
  "hoary bat",
  "hoary redpoll",
  "hoary-headed grebe",
  "holly blue",
  "honey bee",
  "honey buzzard",
  "honeycreeper",
  "hooded crow",
  "hooded merganser",
  "hooded oriole",
  "hooded warbler",
  "hoopoe",
  "hornbill",
  "horned grebe",
  "horned lark",
  "hornet",
  "horse fly",
  "house finch",
  "house fly",
  "house martin",
  "house sparrow",
  "house wren",
  "hoverfly",
  "hummingbird",
  "hummingbird hawk-moth",
  "huntsman spider wasp",
  "ibis",
  "ichneumon wasp",
  "imperial eagle",
  "imperial moth",
  "inca dove",
  "inca tern",
  "indian flying fox",
  "indian grey hornbill",
  "indian paradise flycatcher",
  "indian peafowl",
  "indian roller",
  "indian skimmer",
  "indian swiftlet",
  "indigo bunting",
  "indigo flycatcher",
  "indra swallowtail",
  "inland dotterel",
  "inland thornbill",
  "insect",
  "intermediate egret",
  "iolite hummingbird",
  "io moth",
  "irania",
  "iris lorikeet",
  "isabelline shrike",
  "isabelline wheatear",
  "isabella tiger moth",
  "island canary",
  "island monarch",
  "island scrub-jay",
  "island swiftlet",
  "island thrush",
  "island whistler",
  "ivory gull",
  "ivory-billed woodpecker",
  "jabiru",
  "jack snipe",
  "jackdaw",
  "jambu fruit dove",
  "jameson's firefinch",
  "japanese beetle",
  "japanese bush warbler",
  "japanese grosbeak",
  "japanese murrelet",
  "japanese night heron",
  "japanese paradise flycatcher",
  "japanese pygmy woodpecker",
  "japanese quail",
  "japanese robin",
  "japanese scops owl",
  "japanese sparrowhawk",
  "japanese tit",
  "japanese wagtail",
  "japanese waxwing",
  "japanese white-eye",
  "java sparrow",
  "javan banded pitta",
  "javan kingfisher",
  "javan myna",
  "javan pond heron",
  "javan swiftlet",
  "jay",
  "jet",
  "jet airliner",
  "jet fighter",
  "jewel beetle",
  "jewel wasp",
  "jewelwing",
  "juan fernandez firecrown",
  "junco",
  "jungle myna",
  "jungle owlet",
  "junglefowl",
  "karner blue",
  "katydid",
  "kea",
  "kelp gull",
  "kentish plover",
  "kentucky warbler",
  "kermode's flycatcher",
  "kestrel",
  "killdeer",
  "killer bee",
  "king eider",
  "king rail",
  "king vulture",
  "kingbird",
  "kingfisher",
  "kinglet",
  "kirtland's warbler",
  "kite",
  "kite swallowtail",
  "kittiwake",
  "knobbed hornbill",
  "knobbed whelk moth",
  "koepcke's hermit",
  "koklass pheasant",
  "kookaburra",
  "kori bustard",
  "kurrichane thrush",
  "kuhl's pipistrelle",
  "kuranda tree frog moth",
  "kuril bobtail moth",
  "karoo lark",
  "karoo prinia",
  "karoo thrush",
  "kashmir flycatcher",
  "kashmir nuthatch",
  "kenrick's starling",
  "kenya sparrow",
  "king protea butterfly",
  "klages's antwren",
  "kordofan lark",
  "lacewing",
  "ladybird",
  "ladybug",
  "lapwing",
  "lark",
  "lark bunting",
  "lark sparrow",
  "laughing gull",
  "lattice-tailed trogon",
  "lazuli bunting",
  "leafcutter bee",
  "least bittern",
  "least flycatcher",
  "least sandpiper",
  "least tern",
  "lesser black-backed gull",
  "lesser goldfinch",
  "lesser kestrel",
  "lesser nighthawk",
  "lesser scaup",
  "lesser yellowlegs",
  "lewis's woodpecker",
  "libellula dragonfly",
  "lightning bug",
  "lilac-breasted roller",
  "limpkin",
  "lincoln's sparrow",
  "little blue heron",
  "little egret",
  "little gull",
  "little owl",
  "little ringed plover",
  "little swift",
  "locust",
  "loggerhead shrike",
  "long-eared bat",
  "long-eared owl",
  "long-tailed duck",
  "long-tailed jaeger",
  "long-tailed tit",
  "long-billed curlew",
  "longhorn beetle",
  "lorikeet",
  "lovebird",
  "luna moth",
  "macaw",
  "magpie",
  "magnificent frigatebird",
  "magnificent hummingbird",
  "magpie goose",
  "mallard",
  "mandarin duck",
  "mantisfly",
  "marbled godwit",
  "marbled murrelet",
  "marsh harrier",
  "marsh wren",
  "martin",
  "masked booby",
  "masked lapwing",
  "mayfly",
  "meadow pipit",
  "meadowlark",
  "merganser",
  "merlin",
  "mexican free-tailed bat",
  "mexican jay",
  "mexican violetear",
  "midges",
  "military macaw",
  "mining bee",
  "mississippi kite",
  "mockingbird",
  "monarch butterfly",
  "mosquito",
  "mosquito hawk",
  "moth",
  "mourning dove",
  "mourning warbler",
  "mud dauber",
  "murre",
  "murrelet",
  "muscovy duck",
  "myna",
  "myotis bat",
  "nankeen kestrel", "nankeen night heron", "narcissus flycatcher", "narrow-winged damselfly", "nashi pear psyllid", "needletail", "neotropical cormorant", "nighthawk", "night heron", "nightingale", "nightjar", "noctuid moth", "noctule", "northern bald ibis", "northern cardinal", "northern flicker", "northern fulmar", "northern gannet", "northern goshawk", "northern harrier", "northern hawk owl", "northern jacana", "northern lapwing", "northern mockingbird", "northern parula", "northern pintail", "northern pygmy-owl", "northern rough-winged swallow", "northern saw-whet owl", "northern shoveler", "northern shrike", "northern wheatear", "northern yellow bat", "nuthatch", "nutcracker",
  "oak titmouse", "oahu elepaio", "ochre-bellied flycatcher", "ochre-breasted antpitta", "olive-backed euphonia", "olive-backed sunbird", "olive-sided flycatcher", "olive sparrow", "olive warbler", "olivaceous flycatcher", "orange bishop", "orange-bellied parrot", "orange-breasted bunting", "orange-crowned warbler", "orange-fronted parakeet", "orange-headed thrush", "orange sulphur", "orange-winged amazon", "orchard oriole", "orchid bee", "oriental dollarbird", "oriental hornet", "oriental magpie-robin", "oriental pied hornbill", "oriental pratincole", "oriental scops owl", "oriental turtle dove", "oriole", "ornithopter", "osprey", "ovenbird", "owl", "owl butterfly", "owl fly", "ox beetle", "oystercatcher",
  "painted lady", "pale chanting goshawk", "pallid harrier", "paper airplane", "paper kite butterfly", "paper wasp", "parachute", "paraglider", "parakeet", "parrot", "parrotlet", "passenger plane", "peacock", "peacock butterfly", "pelican", "peregrine falcon", "petrel", "pheasant", "phoebe", "pigeon", "pigeon guillemot", "pileated woodpecker", "pine grosbeak", "pine siskin", "pink-footed goose", "pipistrelle", "pipit", "plover", "plume moth", "polyphemus moth", "prairie falcon", "praying mantis", "prothonotary warbler", "puffin", "purple finch", "purple gallinule", "purple martin", "purple-throated carib", "pygmy nuthatch", "pygmy owl", "powered parachute",
];

const alternativeNames: Record<string, string[]> = {
  airplane: ["airplane", "aeroplane"],
  airship: ["airship", "dirigible", "dirigible airship"],
  autogyro: ["autogyro", "auto-gyro", "gyroplane", "gyrocopter"],
  anhinga: ["anhinga", "water turkey", "snakebird", "snake bird"],
  "american kestrel": [
    "american kestrel",
    "american sparrow hawk",
    "sparrow hawk",
  ],
  "american woodcock": ["american woodcock", "timberdoodle", "timber doodle"],
  "atlantic puffin": ["atlantic puffin", "common puffin"],
  "atlas moth": ["atlas moth", "atlas silk moth", "attacus atlas"],
  "african moon moth": ["african moon moth", "argema mimosae"],
  "asian swallowtail": ["asian swallowtail", "papilio xuthus"],
  "bald eagle": ["bald eagle"],
  balloon: ["balloon", "hot air balloon", "hot-air balloon"],
  "baltimore oriole": ["baltimore oriole", "northern oriole"],
  "band-tailed pigeon": ["band-tailed pigeon", "bandtail"],
  "bank swallow": ["bank swallow", "sand martin"],
  bird: ["bird"],
  "barn owl": ["barn owl", "american barn owl"],
  "barn swallow": ["barn swallow"],
  "barrow's goldeneye": ["barrow's goldeneye", "barrows goldeneye"],
  bat: ["bat"],
  "bay-breasted warbler": ["bay-breasted warbler", "bay breasted warbler"],
  bee: ["bee"],
  beetle: ["beetle"],
  "belted kingfisher": ["belted kingfisher"],
  "bewick's wren": ["bewick's wren", "bewicks wren"],
  biplane: ["biplane", "bi-plane"],
  "black-and-white warbler": [
    "black-and-white warbler",
    "black and white warbler",
  ],
  "black-bellied plover": [
    "black-bellied plover",
    "black bellied plover",
    "grey plover",
    "gray plover",
  ],
  "black-billed cuckoo": ["black-billed cuckoo", "black billed cuckoo"],
  "black-capped chickadee": [
    "black-capped chickadee",
    "black capped chickadee",
  ],
  "black-chinned hummingbird": [
    "black-chinned hummingbird",
    "black chinned hummingbird",
  ],
  "black-headed grosbeak": [
    "black-headed grosbeak",
    "black headed grosbeak",
  ],
  "black-necked stilt": ["black-necked stilt", "black necked stilt"],
  "black phoebe": ["black phoebe"],
  "black scoter": ["black scoter", "american scoter"],
  "black swift": ["black swift"],
  "black tern": ["black tern"],
  "blackburnian warbler": ["blackburnian warbler"],
  "blackpoll warbler": ["blackpoll warbler", "black-poll warbler"],
  blimp: ["blimp", "non-rigid airship", "nonrigid airship"],
  "blue grosbeak": ["blue grosbeak"],
  "blue jay": ["blue jay", "bluejay"],
  "blue-gray gnatcatcher": [
    "blue-gray gnatcatcher",
    "blue gray gnatcatcher",
    "blue-grey gnatcatcher",
    "blue grey gnatcatcher",
  ],
  "blue-headed vireo": ["blue-headed vireo", "blue headed vireo"],
  "blue-winged teal": ["blue-winged teal", "blue winged teal"],
  "blue-winged warbler": ["blue-winged warbler", "blue winged warbler"],
  bobolink: ["bobolink", "ricebird", "rice bird"],
  bomber: ["bomber", "bomber aircraft", "bomber plane", "bomber airplane"],
  bumblebee: ["bumblebee", "bumble bee"],
  butterfly: ["butterfly"],
  buzzard: ["buzzard"],
  "cabbage white": [
    "cabbage white",
    "cabbage white butterfly",
    "small white",
    "small cabbage white",
  ],
  "cackling goose": ["cackling goose"],
  caddisfly: ["caddisfly", "caddis fly", "caddis-fly"],
  "california condor": ["california condor", "californian condor"],
  "calliope hummingbird": ["calliope hummingbird"],
  "canada goose": ["canada goose", "canadian goose"],
  "canada warbler": ["canada warbler"],
  canvasback: ["canvasback", "canvasback duck"],
  "cape may warbler": ["cape may warbler"],
  cardinal: ["cardinal", "cardinal bird"],
  "cargo plane": [
    "cargo plane",
    "cargo airplane",
    "cargo aircraft",
    "freighter aircraft",
    "freighter airplane",
  ],
  "carolina chickadee": ["carolina chickadee"],
  "carolina wren": ["carolina wren"],
  "caspian tern": ["caspian tern"],
  "cattle egret": ["cattle egret"],
  "cedar waxwing": ["cedar waxwing"],
  "cerulean warbler": ["cerulean warbler"],
  "chestnut-sided warbler": [
    "chestnut-sided warbler",
    "chestnut sided warbler",
  ],
  chickadee: ["chickadee"],
  "chimney swift": ["chimney swift"],
  "chinook helicopter": [
    "chinook helicopter",
    "chinook",
    "boeing chinook",
    "ch-47 chinook",
  ],
  cicada: ["cicada"],
  "cliff swallow": ["cliff swallow", "american cliff swallow"],
  "clouded sulphur": [
    "clouded sulphur",
    "clouded sulfur",
    "common sulphur",
    "common sulfur",
  ],
  cockatoo: ["cockatoo"],
  cockchafer: ["cockchafer", "may bug", "maybug"],
  cockroach: ["cockroach", "roach"],
  "common grackle": ["common grackle"],
  "common loon": ["common loon", "great northern diver"],
  "common merganser": ["common merganser", "goosander"],
  "common nighthawk": ["common nighthawk", "bullbat", "bull bat"],
  "common raven": ["common raven"],
  "common tern": ["common tern"],
  condor: ["condor"],
  "cooper's hawk": ["cooper's hawk", "coopers hawk", "cooper hawk"],
  cormorant: ["cormorant"],
  crane: ["crane", "crane bird"],
  "crane fly": ["crane fly", "cranefly", "crane-fly"],
  crow: ["crow"],
  cuckoo: ["cuckoo", "cuckoo bird"],
  curlew: ["curlew"],
  "cypress sphinx": ["cypress sphinx", "cypress sphinx moth"],
  "cabbage moth": ["cabbage moth"],
  "cabbage looper": ["cabbage looper", "cabbage looper moth"],
  "carpenter bee": ["carpenter bee"],
  "carrion crow": ["carrion crow"],
  "cicada killer": [
    "cicada killer",
    "cicada killer wasp",
    "eastern cicada killer",
  ],
  "crimson rosella": [
    "crimson rosella",
    "pennant's parakeet",
    "pennants parakeet",
  ],
  damselfly: ["damselfly", "damsel fly"],
  "dark-eyed junco": ["dark-eyed junco", "dark eyed junco", "snowbird"],
  "dark-eyed white-eye": ["dark-eyed white-eye", "dark eyed white eye"],
  "dark-rumped petrel": ["dark-rumped petrel", "dark rumped petrel"],
  "dartford warbler": ["dartford warbler"],
  "de havilland comet": ["de havilland comet", "comet airliner", "dh comet"],
  "de havilland mosquito": [
    "de havilland mosquito",
    "dh mosquito",
    "mosquito aircraft",
  ],
  "deer fly": ["deer fly", "deerfly"],
  "delta-wing aircraft": [
    "delta-wing aircraft",
    "delta wing aircraft",
    "delta-wing airplane",
    "delta wing airplane",
    "delta wing plane",
  ],
  "desert locust": ["desert locust"],
  "diamond dove": ["diamond dove"],
  "diamondback moth": ["diamondback moth", "diamondback cabbage moth"],
  dickcissel: ["dickcissel"],
  diptera: ["diptera", "true flies"],
  "diving petrel": ["diving petrel"],
  dobsonfly: ["dobsonfly", "dobson fly"],
  "domestic pigeon": [
    "domestic pigeon",
    "domestic rock pigeon",
    "domestic rock dove",
  ],
  "donkey orchid bee": ["donkey orchid bee"],
  "double-crested cormorant": [
    "double-crested cormorant",
    "double crested cormorant",
  ],
  dove: ["dove"],
  "downy woodpecker": ["downy woodpecker"],
  dragonfly: ["dragonfly", "dragon fly"],
  drone: ["drone", "unmanned aerial vehicle", "uav"],
  "drone fly": ["drone fly", "dronefly"],
  drongo: ["drongo"],
  duck: ["duck"],
  dunlin: ["dunlin"],
  "dung beetle": ["dung beetle"],
  "dusky flycatcher": ["dusky flycatcher"],
  "dusky grouse": ["dusky grouse", "blue grouse"],
  "dusky lory": ["dusky lory", "dusky-orange lory", "dusky orange lory"],
  "dusky-capped flycatcher": [
    "dusky-capped flycatcher",
    "dusky capped flycatcher",
  ],
  "dusky-winged woodpecker": [
    "dusky-winged woodpecker",
    "dusky winged woodpecker",
  ],
  "dwarf honey bee": [
    "dwarf honey bee",
    "dwarf honeybee",
    "red dwarf honey bee",
    "red dwarf honeybee",
  ],
  "dwarf kingfisher": ["dwarf kingfisher"],
  "dwarf swiftlet": ["dwarf swiftlet"],
  "dytiscid beetle": [
    "dytiscid beetle",
    "predaceous diving beetle",
    "predacious diving beetle",
  ],
  darner: ["darner", "darner dragonfly"],
  "death's-head hawkmoth": [
    "death's-head hawkmoth",
    "death's head hawkmoth",
    "death's-head hawk moth",
    "death's head hawk moth",
  ],
  "dogface butterfly": ["dogface butterfly", "dog-face butterfly"],
  eagle: ["eagle"],
  "eagle owl": ["eagle owl", "eagle-owl"],
  "eared dove": ["eared dove"],
  "eared grebe": ["eared grebe", "black-necked grebe", "black necked grebe"],
  earwig: ["earwig"],
  "eastern bluebird": ["eastern bluebird"],
  "eastern bluebonnet": ["eastern bluebonnet", "greater bluebonnet"],
  "eastern cicada killer": [
    "eastern cicada killer",
    "eastern cicada-killer",
    "eastern cicada killer wasp",
  ],
  "eastern imperial eagle": ["eastern imperial eagle", "imperial eagle"],
  "eastern kingbird": ["eastern kingbird", "eastern kingbird flycatcher"],
  "eastern meadowlark": ["eastern meadowlark", "eastern meadow lark"],
  "eastern phoebe": ["eastern phoebe"],
  "eastern screech-owl": ["eastern screech-owl", "eastern screech owl"],
  "eastern spinebill": ["eastern spinebill", "spinebill"],
  "eastern tiger swallowtail": [
    "eastern tiger swallowtail",
    "eastern tiger swallowtail butterfly",
  ],
  "eastern towhee": [
    "eastern towhee",
    "rufous-sided towhee",
    "rufous sided towhee",
  ],
  "eastern wood-pewee": ["eastern wood-pewee", "eastern wood pewee"],
  "egyptian fruit bat": [
    "egyptian fruit bat",
    "egyptian rousette",
    "egyptian rousett",
  ],
  "egyptian goose": ["egyptian goose"],
  eider: ["eider", "eider duck"],
  "elephant hawk-moth": ["elephant hawk-moth", "elephant hawk moth"],
  "emerald ash borer": ["emerald ash borer", "emerald ash borer beetle"],
  "emerald dove": [
    "emerald dove",
    "common emerald dove",
    "green-winged pigeon",
    "green winged pigeon",
  ],
  "emerald moth": ["emerald moth", "emerald"],
  "emperor dragonfly": ["emperor dragonfly", "blue emperor", "emperor"],
  "emperor goose": ["emperor goose"],
  "emperor moth": ["emperor moth", "small emperor moth"],
  "emu-wren": ["emu-wren", "emu wren"],
  "epauletted fruit bat": [
    "epauletted fruit bat",
    "epauletted bat",
    "epauleted fruit bat",
    "epauleted bat",
  ],
  "european bee-eater": ["european bee-eater", "european bee eater"],
  "european goldfinch": ["european goldfinch", "goldfinch"],
  "european green woodpecker": ["european green woodpecker", "green woodpecker"],
  "european hornet": ["european hornet", "giant hornet"],
  "european nightjar": [
    "european nightjar",
    "common nightjar",
    "eurasian nightjar",
  ],
  "european robin": ["european robin", "robin redbreast", "robin-redbreast"],
  "european roller": ["european roller"],
  "european starling": ["european starling", "common starling"],
  "european swallowtail": [
    "european swallowtail",
    "old world swallowtail",
    "common yellow swallowtail",
  ],
  "european swift": ["european swift", "common swift"],
  "evening grosbeak": ["evening grosbeak"],
  "fairy tern": ["fairy tern", "white tern", "common white tern"],
  falcon: ["falcon"],
  fantail: ["fantail", "fantail bird"],
  "feather-legged fly": ["feather-legged fly", "feather legged fly"],
  "ferruginous hawk": [
    "ferruginous hawk",
    "ferruginous rough-leg",
    "ferruginous roughleg",
  ],
  fieldfare: ["fieldfare"],
  "fighter aircraft": [
    "fighter aircraft",
    "fighter airplane",
    "fighter plane",
    "fighter jet",
  ],
  figbird: ["figbird", "fig bird"],
  finch: ["finch"],
  firefly: ["firefly", "fire fly", "lightning bug", "lightning beetle"],
  "fish crow": ["fish crow"],
  "fisher's lovebird": [
    "fisher's lovebird",
    "fishers lovebird",
    "fischer's lovebird",
    "fischers lovebird",
  ],
  "fishing bat": ["fishing bat", "fisherman bat", "greater bulldog bat"],
  "flame robin": ["flame robin"],
  flamingo: ["flamingo"],
  "flesh fly": ["flesh fly", "fleshfly"],
  "flightless cormorant moth": ["flightless cormorant moth"],
  "flower chafer": ["flower chafer", "flower chafer beetle", "flower beetle"],
  "flower fly": ["flower fly", "flowerfly", "hover fly", "hoverfly", "syrphid fly"],
  fly: ["fly", "true fly"],
  flycatcher: ["flycatcher", "flycatcher bird"],
  "flying fox": ["flying fox", "flying-fox", "flying fox bat"],
  "flying squirrel moth": ["flying squirrel moth"],
  "flying wing": ["flying wing", "flying-wing aircraft", "flying wing aircraft"],
  "forest kingfisher": ["forest kingfisher", "macquarie kingfisher"],
  "fork-tailed flycatcher": [
    "fork-tailed flycatcher",
    "fork tailed flycatcher",
    "swallow-tailed flycatcher",
    "swallow tailed flycatcher",
  ],
  "fork-tailed swift": ["fork-tailed swift", "fork tailed swift", "pacific swift"],
  "four-spotted chaser": [
    "four-spotted chaser",
    "four spotted chaser",
    "four-spotted skimmer",
    "four spotted skimmer",
  ],
  "franklin's gull": ["franklin's gull", "franklins gull"],
  "freckled duck": ["freckled duck"],
  frigatebird: [
    "frigatebird",
    "frigate bird",
    "frigate-bird",
    "man-of-war bird",
    "man o' war bird",
  ],
  "fringe-toed bat": ["fringe-toed bat", "fringe toed bat"],
  "fritillary butterfly": ["fritillary butterfly", "fritillary"],
  frogmouth: ["frogmouth", "frogmouth bird"],
  "fruit bat": ["fruit bat", "fruit-eating bat", "fruit eating bat"],
  "fruit fly": ["fruit fly", "fruitfly", "vinegar fly"],
  fulmar: ["fulmar", "fulmar petrel"],
  "fulvous whistling-duck": [
    "fulvous whistling-duck",
    "fulvous whistling duck",
    "fulvous tree duck",
    "fulvous tree-duck",
  ],
  "funereal duskywing": ["funereal duskywing", "funereal duskywing butterfly"],
  "funnel-web spider wasp": ["funnel-web spider wasp", "funnel web spider wasp"],
  gadfly: ["gadfly", "gad fly"],
  gadwall: ["gadwall"],
  gallinule: ["gallinule", "gallinule bird"],
  gannet: ["gannet"],
  "garden tiger moth": ["garden tiger moth", "great tiger moth"],
  geese: ["geese"],
  "ghost bat": ["ghost bat", "false vampire bat", "australian false vampire bat"],
  "giant honey bee": ["giant honey bee", "giant honeybee", "giant honey-bee", "rock bee"],
  "giant swallowtail": ["giant swallowtail", "giant swallowtail butterfly", "orange dog"],
  glider: ["glider", "glider aircraft", "sailplane"],
  "glossy ibis": ["glossy ibis"],
  gnat: ["gnat"],
  gnatcatcher: ["gnatcatcher", "gnatcatcher bird"],
  "goat moth": ["goat moth"],
  "golden eagle": ["golden eagle"],
  "golden-crowned kinglet": ["golden-crowned kinglet", "golden crowned kinglet"],
  "golden-winged warbler": ["golden-winged warbler", "golden winged warbler"],
  goldfinch: ["goldfinch", "gold finch"],
  "goliath beetle": ["goliath beetle", "goliath beetles"],
  goose: ["goose"],
  goshawk: ["goshawk", "goose hawk"],
  grasshopper: ["grasshopper"],
  "grasshopper sparrow": ["grasshopper sparrow"],
  "gray catbird": ["gray catbird", "grey catbird", "catbird"],
  "gray hawk": ["gray hawk", "grey hawk"],
  "gray-headed flying fox": [
    "gray-headed flying fox",
    "grey-headed flying fox",
    "gray headed flying fox",
    "grey headed flying fox",
    "gray-headed flying-fox",
    "grey-headed flying-fox",
  ],
  "great black-backed gull": [
    "great black-backed gull",
    "great black backed gull",
    "great blackbacked gull",
  ],
  "great blue heron": ["great blue heron"],
  "great crested flycatcher": ["great crested flycatcher"],
  "great egret": ["great egret", "great white egret", "great white heron"],
  "great gray owl": ["great gray owl", "great grey owl"],
  "great horned owl": ["great horned owl", "tiger owl"],
  "great kiskadee": ["great kiskadee", "kiskadee"],
  "great-tailed grackle": ["great-tailed grackle", "great tailed grackle"],
  "greater scaup": ["greater scaup", "bluebill"],
  "greater white-fronted goose": [
    "greater white-fronted goose",
    "greater white fronted goose",
    "white-fronted goose",
    "white fronted goose",
    "specklebelly",
  ],
  "greater yellowlegs": ["greater yellowlegs", "greater yellow-legs"],
  "green darner": [
    "green darner",
    "common green darner",
    "green darner dragonfly",
    "common green darner dragonfly",
  ],
  "green heron": ["green heron"],
  "green june beetle": ["green june beetle", "june bug", "june beetle"],
  "green lacewing": ["green lacewing", "green lacewing fly", "lacewing"],
  "green-winged teal": ["green-winged teal", "green winged teal"],
  grebe: ["grebe"],
  grackle: ["grackle"],
  grosbeak: ["grosbeak"],
  grouse: ["grouse"],
  gull: ["gull", "seagull", "sea gull"],
  "gypsy moth": ["gypsy moth", "spongy moth"],
  gyrfalcon: ["gyrfalcon", "gyr falcon"],
  "hairy woodpecker": ["hairy woodpecker"],
  "hammer-headed fruit bat": [
    "hammer-headed fruit bat",
    "hammer headed fruit bat",
    "hammer-headed bat",
    "hammer headed bat",
    "big-lipped bat",
  ],
  "harlequin duck": ["harlequin duck", "harlequin"],
  "harris's hawk": [
    "harris's hawk",
    "harris hawk",
    "harriss hawk",
    "bay-winged hawk",
    "bay winged hawk",
  ],
  "harris's sparrow": ["harris's sparrow", "harris sparrow", "harriss sparrow"],
  harrier: ["harrier", "harrier hawk"],
  hawk: ["hawk"],
  "hawk moth": ["hawk moth", "hawkmoth", "hawk-moth", "sphinx moth"],
  helicopter: [
    "helicopter",
    "chopper",
    "rotary-wing aircraft",
    "rotary wing aircraft",
  ],
  "helicopter damselfly": ["helicopter damselfly", "helicopter damsel"],
  "helicopter seed": ["helicopter seed", "helicopter seeds", "helicopter samara"],
  "herald petrel": ["herald petrel"],
  "hercules beetle": ["hercules beetle", "hercules scarab"],
  "hermit thrush": ["hermit thrush"],
  heron: ["heron"],
  "herring gull": ["herring gull"],
  "hoary bat": ["hoary bat"],
  "hoary redpoll": ["hoary redpoll", "arctic redpoll"],
  "hoary-headed grebe": ["hoary-headed grebe", "hoary headed grebe"],
  "holly blue": ["holly blue", "holly blue butterfly"],
  "honey bee": ["honey bee", "honeybee", "honey-bee"],
  "honey buzzard": ["honey buzzard", "honey-buzzard"],
  honeycreeper: ["honeycreeper", "honey creeper"],
  "hooded crow": ["hooded crow", "hoodie crow"],
  "hooded merganser": ["hooded merganser", "hooded sheldrake"],
  "hooded oriole": ["hooded oriole"],
  "hooded warbler": ["hooded warbler"],
  hoopoe: ["hoopoe", "common hoopoe", "eurasian hoopoe"],
  hornbill: ["hornbill"],
  "horned grebe": ["horned grebe", "slavonian grebe"],
  "horned lark": ["horned lark", "shore lark"],
  hornet: ["hornet"],
  "horse fly": ["horse fly", "horsefly", "horse-fly"],
  "house finch": ["house finch"],
  "house fly": [
    "house fly",
    "housefly",
    "house-fly",
    "common housefly",
    "common house fly",
  ],
  "house martin": ["house martin", "common house martin", "northern house martin"],
  "house sparrow": ["house sparrow", "english sparrow"],
  "house wren": ["house wren"],
  hoverfly: ["hoverfly", "hover fly", "hover-fly", "syrphid fly", "flower fly"],
  hummingbird: ["hummingbird", "humming bird"],
  "hummingbird hawk-moth": [
    "hummingbird hawk-moth",
    "hummingbird hawk moth",
    "hummingbird hawkmoth",
  ],
  "huntsman spider wasp": ["huntsman spider wasp", "huntsman wasp"],
  ibis: ["ibis"],
  "ichneumon wasp": ["ichneumon wasp", "ichneumonid wasp"],
  "imperial eagle": ["imperial eagle"],
  "imperial moth": ["imperial moth", "imperial moth butterfly"],
  "inca dove": ["inca dove", "mexican dove"],
  "inca tern": ["inca tern"],
  "indian flying fox": [
    "indian flying fox",
    "greater indian fruit bat",
    "indian fruit bat",
  ],
  "indian grey hornbill": [
    "indian grey hornbill",
    "indian gray hornbill",
    "common grey hornbill",
    "common gray hornbill",
  ],
  "indian paradise flycatcher": [
    "indian paradise flycatcher",
    "indian paradise-flycatcher",
  ],
  "indian peafowl": ["indian peafowl", "blue peafowl", "common peafowl"],
  "indian roller": ["indian roller", "blue jay"],
  "indian skimmer": [
    "indian skimmer",
    "indian scissors-bill",
    "indian scissorsbill",
  ],
  "indian swiftlet": ["indian swiftlet"],
  "indigo bunting": ["indigo bunting", "indigo bird"],
  "indigo flycatcher": ["indigo flycatcher"],
  "indra swallowtail": ["indra swallowtail", "indra swallowtail butterfly"],
  "inland dotterel": ["inland dotterel", "australian dotterel"],
  "inland thornbill": [
    "inland thornbill",
    "broad-tailed thornbill",
    "broad tailed thornbill",
  ],
  insect: ["insect"],
  "intermediate egret": [
    "intermediate egret",
    "medium egret",
    "yellow-billed egret",
    "yellow billed egret",
  ],
  "iolite hummingbird": [
    "iolite hummingbird",
    "velvet-purple coronet",
    "velvet purple coronet",
  ],
  "io moth": ["io moth", "peacock moth"],
  irania: ["irania", "white-throated robin", "white throated robin"],
  "iris lorikeet": ["iris lorikeet", "iris lory"],
  "isabelline shrike": ["isabelline shrike", "daurian shrike"],
  "isabelline wheatear": ["isabelline wheatear"],
  "isabella tiger moth": [
    "isabella tiger moth",
    "isabella tiger-moth",
    "woolly bear moth",
  ],
  "island canary": [
    "island canary",
    "atlantic canary",
    "common canary",
    "wild canary",
  ],
  "island monarch": ["island monarch"],
  "island scrub-jay": ["island scrub-jay", "island scrub jay", "santa cruz jay"],
  "island swiftlet": ["island swiftlet", "uniform swiftlet"],
  "island thrush": ["island thrush", "island blackbird"],
  "island whistler": ["island whistler"],
  "ivory gull": ["ivory gull"],
  "ivory-billed woodpecker": [
    "ivory-billed woodpecker",
    "ivory billed woodpecker",
    "ivorybill",
    "ivory-bill",
  ],
  jabiru: ["jabiru", "jabiru stork"],
  "jack snipe": ["jack snipe", "jacksnipe"],
  jackdaw: ["jackdaw", "eurasian jackdaw", "western jackdaw"],
  "jambu fruit dove": ["jambu fruit dove", "jambu fruit-dove"],
  "jameson's firefinch": ["jameson's firefinch", "jamesons firefinch"],
  "japanese beetle": ["japanese beetle"],
  "japanese bush warbler": [
    "japanese bush warbler",
    "japanese bush-warbler",
    "uguisu",
  ],
  "japanese grosbeak": ["japanese grosbeak"],
  "japanese murrelet": ["japanese murrelet", "crested murrelet"],
  "japanese night heron": ["japanese night heron", "japanese night-heron"],
  "japanese paradise flycatcher": [
    "japanese paradise flycatcher",
    "japanese paradise-flycatcher",
  ],
  "japanese pygmy woodpecker": [
    "japanese pygmy woodpecker",
    "japanese pygmy-woodpecker",
  ],
  "japanese quail": ["japanese quail", "coturnix quail"],
  "japanese robin": ["japanese robin"],
  "japanese scops owl": ["japanese scops owl", "japanese scops-owl"],
  "japanese sparrowhawk": ["japanese sparrowhawk", "japanese sparrow hawk"],
  "japanese tit": ["japanese tit", "oriental tit"],
  "japanese wagtail": ["japanese wagtail"],
  "japanese waxwing": ["japanese waxwing"],
  "japanese white-eye": [
    "japanese white-eye",
    "japanese white eye",
    "warbling white-eye",
    "warbling white eye",
    "mejiro",
  ],
  "java sparrow": ["java sparrow", "java finch", "java rice bird", "java ricebird"],
  "javan banded pitta": ["javan banded pitta", "javan banded-pitta"],
  "javan kingfisher": ["javan kingfisher", "java kingfisher"],
  "javan myna": [
    "javan myna",
    "javan mynah",
    "white-vented myna",
    "white vented myna",
  ],
  "javan pond heron": ["javan pond heron", "javan pond-heron"],
  "javan swiftlet": ["javan swiftlet"],
  jay: ["jay"],
  jet: ["jet", "jet aircraft", "jet plane", "jet airplane"],
  "jet airliner": ["jet airliner", "jetliner", "jet liner"],
  "jet fighter": ["jet fighter", "fighter jet"],
  "jewel beetle": [
    "jewel beetle",
    "metallic wood-boring beetle",
    "metallic wood boring beetle",
    "buprestid beetle",
  ],
  "jewel wasp": ["jewel wasp", "emerald cockroach wasp", "emerald wasp"],
  jewelwing: ["jewelwing", "jewelwing damselfly"],
  "juan fernandez firecrown": [
    "juan fernandez firecrown",
    "juan fernández firecrown",
  ],
  junco: ["junco", "junco bird"],
  "jungle myna": ["jungle myna", "jungle mynah"],
  "jungle owlet": ["jungle owlet", "barred jungle owlet"],
  junglefowl: ["junglefowl", "jungle fowl"],
  "karner blue": ["karner blue", "karner blue butterfly"],
  katydid: [
    "katydid",
    "bush cricket",
    "long-horned grasshopper",
    "long horned grasshopper",
  ],
  kea: ["kea", "kea parrot"],
  "kelp gull": ["kelp gull", "dominican gull"],
  "kentish plover": ["kentish plover"],
  "kentucky warbler": ["kentucky warbler"],
  "kermode's flycatcher": ["kermode's flycatcher", "kermodes flycatcher"],
  kestrel: ["kestrel"],
  killdeer: ["killdeer", "kill-deer"],
  "killer bee": [
    "killer bee",
    "africanized honey bee",
    "africanised honey bee",
    "africanized bee",
    "africanised bee",
  ],
  "king eider": ["king eider", "king eider duck"],
  "king rail": ["king rail"],
  "king vulture": ["king vulture"],
  kingbird: ["kingbird", "king bird"],
  kingfisher: ["kingfisher", "king fisher"],
  kinglet: ["kinglet", "kinglet bird"],
  "kirtland's warbler": ["kirtland's warbler", "kirtlands warbler"],
  kite: ["kite", "flying kite"],
  "kite swallowtail": ["kite swallowtail", "kite swallowtail butterfly"],
  kittiwake: ["kittiwake", "kittiwake gull"],
  "knobbed hornbill": ["knobbed hornbill", "sulawesi wrinkled hornbill"],
  "knobbed whelk moth": ["knobbed whelk moth"],
  "koepcke's hermit": [
    "koepcke's hermit",
    "koepckes hermit",
    "koepcke's hermit hummingbird",
  ],
  "koklass pheasant": ["koklass pheasant", "koklass"],
  kookaburra: ["kookaburra"],
  "kori bustard": ["kori bustard"],
  "kurrichane thrush": ["kurrichane thrush"],
  "kuhl's pipistrelle": [
    "kuhl's pipistrelle",
    "kuhls pipistrelle",
    "kuhl's pipistrelle bat",
    "kuhl's bat",
  ],
  "kuranda tree frog moth": ["kuranda tree frog moth"],
  "kuril bobtail moth": ["kuril bobtail moth"],
  "karoo lark": ["karoo lark"],
  "karoo prinia": ["karoo prinia", "spotted prinia"],
  "karoo thrush": ["karoo thrush"],
  "kashmir flycatcher": ["kashmir flycatcher", "kashmir fly-catcher"],
  "kashmir nuthatch": ["kashmir nuthatch"],
  "kenrick's starling": ["kenrick's starling", "kenricks starling"],
  "kenya sparrow": ["kenya sparrow", "kenya rufous sparrow"],
  "king protea butterfly": ["king protea butterfly", "king protea"],
  "klages's antwren": ["klages's antwren", "klagess antwren"],
  "kordofan lark": ["kordofan lark"],
  lacewing: ["lacewing", "lacewing fly"],
  ladybird: ["ladybird", "ladybird beetle"],
  ladybug: ["ladybug", "lady bug"],
  lapwing: ["lapwing"],
  lark: ["lark"],
  "lark bunting": ["lark bunting"],
  "lark sparrow": ["lark sparrow"],
  "laughing gull": ["laughing gull"],
  "lattice-tailed trogon": ["lattice-tailed trogon", "lattice tailed trogon"],
  "lazuli bunting": ["lazuli bunting"],
  "leafcutter bee": [
    "leafcutter bee",
    "leaf-cutter bee",
    "leaf cutter bee",
    "leafcutting bee",
    "leaf-cutting bee",
  ],
  "least bittern": ["least bittern"],
  "least flycatcher": ["least flycatcher", "chebec"],
  "least sandpiper": ["least sandpiper"],
  "least tern": ["least tern"],
  "lesser black-backed gull": [
    "lesser black-backed gull",
    "lesser black backed gull",
  ],
  "lesser goldfinch": ["lesser goldfinch"],
  "lesser kestrel": ["lesser kestrel"],
  "lesser nighthawk": ["lesser nighthawk"],
  "lesser scaup": ["lesser scaup", "little bluebill"],
  "lesser yellowlegs": ["lesser yellowlegs"],
  "lewis's woodpecker": [
    "lewis's woodpecker",
    "lewis woodpecker",
    "lewises woodpecker",
  ],
  "libellula dragonfly": ["libellula dragonfly", "libellula"],
  "lightning bug": ["lightning bug", "lightning beetle"],
  "lilac-breasted roller": ["lilac-breasted roller", "lilac breasted roller"],
  limpkin: ["limpkin", "carrao", "crying bird"],
  "lincoln's sparrow": ["lincoln's sparrow", "lincolns sparrow"],
  "little blue heron": ["little blue heron"],
  "little egret": ["little egret"],
  "little gull": ["little gull"],
  "little owl": ["little owl"],
  "little ringed plover": ["little ringed plover"],
  "little swift": ["little swift", "house swift"],
  locust: ["locust"],
  "loggerhead shrike": ["loggerhead shrike", "butcherbird", "butcher bird"],
  "long-eared bat": ["long-eared bat", "long eared bat"],
  "long-eared owl": ["long-eared owl", "long eared owl"],
  "long-tailed duck": ["long-tailed duck", "long tailed duck", "oldsquaw"],
  "long-tailed jaeger": [
    "long-tailed jaeger",
    "long tailed jaeger",
    "long-tailed skua",
    "long tailed skua",
  ],
  "long-tailed tit": ["long-tailed tit", "long tailed tit", "long-tailed bushtit"],
  "long-billed curlew": [
    "long-billed curlew",
    "long billed curlew",
    "sicklebird",
    "sickle bird",
  ],
  "longhorn beetle": [
    "longhorn beetle",
    "long-horned beetle",
    "long horned beetle",
    "longicorn beetle",
  ],
  lorikeet: ["lorikeet"],
  lovebird: ["lovebird", "love bird"],
  "luna moth": ["luna moth", "american moon moth"],
  macaw: ["macaw"],
  magpie: ["magpie", "magpie bird"],
  "magnificent frigatebird": [
    "magnificent frigatebird",
    "magnificent frigate bird",
    "man-of-war bird",
    "man o' war bird",
  ],
  "magnificent hummingbird": [
    "magnificent hummingbird",
    "rivoli's hummingbird",
    "rivolis hummingbird",
  ],
  "magpie goose": ["magpie goose", "magpie-goose"],
  mallard: ["mallard", "mallard duck"],
  "mandarin duck": ["mandarin duck", "mandarin"],
  mantisfly: ["mantisfly", "mantis fly", "mantidfly", "mantid fly"],
  "marbled godwit": ["marbled godwit"],
  "marbled murrelet": ["marbled murrelet"],
  "marsh harrier": ["marsh harrier", "marsh hawk"],
  "marsh wren": [
    "marsh wren",
    "long-billed marsh wren",
    "long billed marsh wren",
  ],
  martin: ["martin", "martin bird"],
  "masked booby": ["masked booby", "masked gannet"],
  "masked lapwing": [
    "masked lapwing",
    "masked plover",
    "spur-winged plover",
    "spur winged plover",
  ],
  mayfly: ["mayfly", "may fly", "dayfly", "fishfly"],
  "meadow pipit": ["meadow pipit"],
  meadowlark: ["meadowlark", "meadow lark"],
  merganser: ["merganser", "sawbilled duck", "sawbill"],
  merlin: ["merlin", "merlin falcon", "pigeon hawk"],
  "mexican free-tailed bat": [
    "mexican free-tailed bat",
    "mexican free tailed bat",
    "brazilian free-tailed bat",
    "brazilian free tailed bat",
  ],
  "mexican jay": [
    "mexican jay",
    "gray-breasted jay",
    "grey-breasted jay",
    "gray breasted jay",
    "grey breasted jay",
  ],
  "mexican violetear": ["mexican violetear", "green violetear"],
  midges: ["midges", "midge"],
  "military macaw": ["military macaw", "great green macaw"],
  "mining bee": ["mining bee", "miner bee", "andrenid bee"],
  "mississippi kite": ["mississippi kite"],
  mockingbird: ["mockingbird", "mocking bird"],
  "monarch butterfly": ["monarch butterfly", "monarch"],
  mosquito: ["mosquito"],
  "mosquito hawk": [
    "mosquito hawk",
    "mosquito eater",
    "mosquito-eater",
    "skeeter eater",
  ],
  moth: ["moth"],
  "mourning dove": [
    "mourning dove",
    "american mourning dove",
    "rain dove",
    "turtle dove",
  ],
  "mourning warbler": ["mourning warbler"],
  "mud dauber": ["mud dauber", "mud-dauber", "mud wasp"],
  murre: ["murre", "guillemot"],
  murrelet: ["murrelet"],
  "muscovy duck": ["muscovy duck", "muscovy"],
  myna: ["myna", "mynah", "mynah bird"],
  "myotis bat": ["myotis bat", "mouse-eared bat", "mouse eared bat"],
};

Object.assign(alternativeNames, {
  "nankeen kestrel": ["nankeen kestrel", "australian kestrel"],
  "nankeen night heron": ["nankeen night heron", "nankeen night-heron", "rufous night heron", "rufous night-heron"],
  "narcissus flycatcher": ["narcissus flycatcher"],
  "narrow-winged damselfly": ["narrow-winged damselfly", "narrow winged damselfly"],
  "nashi pear psyllid": ["nashi pear psyllid", "pear psylla"],
  needletail: ["needletail", "needletail swift"], "neotropical cormorant": ["neotropical cormorant", "olivaceous cormorant"],
  nighthawk: ["nighthawk", "night hawk"], "night heron": ["night heron", "night-heron"], nightingale: ["nightingale", "common nightingale", "rufous nightingale"], nightjar: ["nightjar", "night jar"],
  "noctuid moth": ["noctuid moth", "noctuid", "owlet moth"], noctule: ["noctule", "common noctule", "noctule bat"],
  "northern bald ibis": ["northern bald ibis", "waldrapp", "hermit ibis"], "northern cardinal": ["northern cardinal", "cardinal", "redbird", "red bird"], "northern flicker": ["northern flicker", "common flicker", "flicker"], "northern fulmar": ["northern fulmar", "arctic fulmar", "fulmar"], "northern gannet": ["northern gannet"], "northern goshawk": ["northern goshawk", "goshawk"], "northern harrier": ["northern harrier", "marsh hawk"], "northern hawk owl": ["northern hawk owl", "northern hawk-owl", "hawk owl", "hawk-owl"], "northern jacana": ["northern jacana", "northern jaçana"], "northern lapwing": ["northern lapwing", "lapwing", "peewit", "green plover"], "northern mockingbird": ["northern mockingbird", "mockingbird"], "northern parula": ["northern parula", "northern parula warbler"], "northern pintail": ["northern pintail", "pintail"], "northern pygmy-owl": ["northern pygmy-owl", "northern pygmy owl"], "northern rough-winged swallow": ["northern rough-winged swallow", "northern rough winged swallow", "rough-winged swallow", "rough winged swallow"], "northern saw-whet owl": ["northern saw-whet owl", "northern saw whet owl", "saw-whet owl", "saw whet owl"], "northern shoveler": ["northern shoveler", "shoveler", "shoveller", "northern shoveller"], "northern shrike": ["northern shrike", "great northern shrike"], "northern wheatear": ["northern wheatear", "wheatear"], "northern yellow bat": ["northern yellow bat", "northern yellow-bat"], nuthatch: ["nuthatch", "nut hatch"], nutcracker: ["nutcracker", "nutcracker bird"],
  "oak titmouse": ["oak titmouse", "plain titmouse"], "oahu elepaio": ["oahu elepaio", "oʻahu elepaio", "oahu elepaio flycatcher"], "ochre-bellied flycatcher": ["ochre-bellied flycatcher", "ochre bellied flycatcher"], "ochre-breasted antpitta": ["ochre-breasted antpitta", "ochre breasted antpitta"], "olive-backed euphonia": ["olive-backed euphonia", "olive backed euphonia"], "olive-backed sunbird": ["olive-backed sunbird", "olive backed sunbird", "yellow-bellied sunbird", "yellow bellied sunbird"], "olive-sided flycatcher": ["olive-sided flycatcher", "olive sided flycatcher"], "olive sparrow": ["olive sparrow", "green finch"], "olive warbler": ["olive warbler"], "olivaceous flycatcher": ["olivaceous flycatcher"], "orange bishop": ["orange bishop", "northern red bishop", "red bishop"], "orange-bellied parrot": ["orange-bellied parrot", "orange bellied parrot"], "orange-breasted bunting": ["orange-breasted bunting", "orange breasted bunting"], "orange-crowned warbler": ["orange-crowned warbler", "orange crowned warbler"], "orange-fronted parakeet": ["orange-fronted parakeet", "orange fronted parakeet", "orange-fronted conure", "orange fronted conure"], "orange-headed thrush": ["orange-headed thrush", "orange headed thrush"], "orange sulphur": ["orange sulphur", "orange sulfur", "orange sulphur butterfly", "orange sulfur butterfly", "alfalfa butterfly"], "orange-winged amazon": ["orange-winged amazon", "orange winged amazon", "orange-winged parrot", "orange winged parrot"], "orchard oriole": ["orchard oriole"], "orchid bee": ["orchid bee", "euglossine bee"], "oriental dollarbird": ["oriental dollarbird", "dollarbird", "dollar bird"], "oriental hornet": ["oriental hornet"], "oriental magpie-robin": ["oriental magpie-robin", "oriental magpie robin", "magpie-robin", "magpie robin"], "oriental pied hornbill": ["oriental pied hornbill", "oriental pied-hornbill"], "oriental pratincole": ["oriental pratincole", "grasshopper bird"], "oriental scops owl": ["oriental scops owl", "oriental scops-owl"], "oriental turtle dove": ["oriental turtle dove", "oriental turtle-dove", "rufous turtle dove", "rufous turtle-dove"], oriole: ["oriole"], ornithopter: ["ornithopter", "flapping-wing aircraft", "flapping wing aircraft"], osprey: ["osprey", "fish hawk", "fishhawk", "sea hawk"], ovenbird: ["ovenbird", "oven bird"], owl: ["owl"], "owl butterfly": ["owl butterfly", "owl butterflies"], "owl fly": ["owl fly", "owlfly", "ascalaphid"], "ox beetle": ["ox beetle", "ox beetle scarab", "elephant beetle"], oystercatcher: ["oystercatcher", "oyster catcher"],
  "painted lady": ["painted lady", "painted lady butterfly", "cosmopolitan butterfly"], "pale chanting goshawk": ["pale chanting goshawk", "pale chanting-goshawk"], "pallid harrier": ["pallid harrier"], "paper airplane": ["paper airplane", "paper aeroplane", "paper plane"], "paper kite butterfly": ["paper kite butterfly", "paper kite", "paperkite butterfly", "rice paper butterfly", "large tree nymph"], "paper wasp": ["paper wasp", "paperwasp"], parachute: ["parachute", "chute"], paraglider: ["paraglider", "paragliding wing"], parakeet: ["parakeet"], parrot: ["parrot"], parrotlet: ["parrotlet"], "passenger plane": ["passenger plane", "passenger airplane", "passenger aircraft"], peacock: ["peacock", "male peafowl"], "peacock butterfly": ["peacock butterfly", "european peacock", "peacock"], pelican: ["pelican"], "peregrine falcon": ["peregrine falcon", "peregrine", "duck hawk"], petrel: ["petrel"], pheasant: ["pheasant"], phoebe: ["phoebe", "phoebe bird", "phoebe flycatcher"], pigeon: ["pigeon"], "pigeon guillemot": ["pigeon guillemot"], "pileated woodpecker": ["pileated woodpecker"], "pine grosbeak": ["pine grosbeak"], "pine siskin": ["pine siskin"], "pink-footed goose": ["pink-footed goose", "pink footed goose"], pipistrelle: ["pipistrelle", "pipistrelle bat"], pipit: ["pipit", "pipit bird"], plover: ["plover"], "plume moth": ["plume moth", "plume-moth"], "polyphemus moth": ["polyphemus moth", "polyphemus"], "prairie falcon": ["prairie falcon"], "praying mantis": ["praying mantis", "praying mantid"], "prothonotary warbler": ["prothonotary warbler", "golden swamp warbler"], puffin: ["puffin"], "purple finch": ["purple finch"], "purple gallinule": ["purple gallinule", "american purple gallinule"], "purple martin": ["purple martin", "purple martin swallow"], "purple-throated carib": ["purple-throated carib", "purple throated carib"], "pygmy nuthatch": ["pygmy nuthatch"], "pygmy owl": ["pygmy owl", "pygmy-owl"], "powered parachute": ["powered parachute", "powered-parachute", "ppc"],
});

Object.assign(alternativeNames, {
  "udzungwa forest partridge":["udzungwa forest partridge","udzungwa partridge"],"uganda woodland warbler":["uganda woodland warbler","uganda woodland-warbler"],"uluguru bushshrike":["uluguru bushshrike","uluguru bush-shrike"],"uluguru mountain greenbul":["uluguru mountain greenbul","uluguru greenbul"],"unicolored antwren":["unicolored antwren","unicoloured antwren"],"unicolored blackbird":["unicolored blackbird","unicoloured blackbird"],"unicolored jay":["unicolored jay","unicoloured jay"],"unicolored tapaculo":["unicolored tapaculo","unicoloured tapaculo"],"unicolored thrush":["unicolored thrush","unicoloured thrush"],"upland goose":["upland goose","magellan goose","magellan upland goose"],"upland sandpiper":["upland sandpiper","upland plover"],
  "variable sunbird":["variable sunbird","yellow-bellied sunbird"],"varied sittella":["varied sittella","varied sitella"],"velvet ant":["velvet ant","velvet-ant","velvet ant wasp"],"velvet scoter":["velvet scoter","velvet duck"],"vesper sparrow":["vesper sparrow","bay-winged bunting","bay winged bunting"],"victoria crowned pigeon":["victoria crowned pigeon","victoria crowned-pigeon","victoria's crowned pigeon","victorias crowned pigeon"],"village indigobird":["village indigobird","steelblue widowfinch","steel-blue widowfinch"],"village weaver":["village weaver","spotted-backed weaver","spotted backed weaver"],"violet-backed starling":["violet-backed starling","violet backed starling","plum-colored starling","plum coloured starling"],"violet-crowned woodnymph":["violet-crowned woodnymph","violet crowned woodnymph","crowned woodnymph"],violetear:["violetear","violet-ear"],"vulturine guineafowl":["vulturine guineafowl","vulturine guinea fowl"],
  "wandering albatross":["wandering albatross","snowy albatross","white-winged albatross"],"wandering glider":["wandering glider","wandering glider dragonfly","globe skimmer","globe skimmer dragonfly"],weevil:["weevil","weevil beetle","snout beetle"],"white stork":["white stork","european white stork"],"whooping crane":["whooping crane","whooper crane"],"wood duck":["wood duck","carolina duck"],"wood pigeon":["wood pigeon","woodpigeon","common wood pigeon","common woodpigeon"],"wood wasp":["wood wasp","woodwasp","horntail","horntail wasp"],wryneck:["wryneck","wryneck woodpecker"],
  "x-1":["x-1","bell x-1","bell x1"],"x-15":["x-15","north american x-15","north american x15"],"x-21":["x-21","northrop x-21","northrop x21"],"x-22":["x-22","bell x-22","bell x22"],"x-24":["x-24","martin marietta x-24","martin x-24"],"x-26 frigate":["x-26 frigate","x-26","schweizer x-26 frigate","schweizer x-26"],"x-28 sea skimmer":["x-28 sea skimmer","x-28","ose x-28 sea skimmer","ose x-28"],"x-29":["x-29","grumman x-29","grumman x29"],"xantus's hummingbird":["xantus's hummingbird","xantus hummingbird","xantus' hummingbird"],"xantus's murrelet":["xantus's murrelet","xantus murrelet","xantus' murrelet"],xeme:["xeme","sabine's gull","sabines gull","sabine gull"],"xinjiang ground-jay":["xinjiang ground-jay","xinjiang ground jay","biddulph's ground jay","biddulphs ground jay"],
  "yellow-fronted canary":["yellow-fronted canary","yellow fronted canary","yellow-eyed canary","yellow eyed canary"],"yellow-crowned night heron":["yellow-crowned night heron","yellow crowned night heron","yellow-crowned night-heron","yellow crowned night-heron"],"yellow-banded bumblebee":["yellow-banded bumblebee","yellow banded bumblebee","yellow-banded bumble bee","yellow banded bumble bee"],yellowjacket:["yellowjacket","yellow jacket","yellow-jacket","yellowjacket wasp","yellow jacket wasp"],yellowwing:["yellowwing","yellowwing butterfly","yellow-wing","yellow wing"],"zanzibar red bishop":["zanzibar red bishop","zanzibar bishop"],"zebra dove":["zebra dove","barred ground dove","barred ground-dove"],"zebra longwing":["zebra longwing","zebra longwing butterfly","zebra heliconian"],"zebra waxbill":["zebra waxbill","orange-breasted waxbill","orange breasted waxbill"],"zitting cisticola":["zitting cisticola","fan-tailed warbler","fan tailed warbler","streaked fantail warbler"],"zone-tailed hawk":["zone-tailed hawk","zone tailed hawk"],
  "2-spotted bumblebee":["2-spotted bumblebee","2 spotted bumblebee","two-spotted bumblebee","two spotted bumblebee","two-spotted bumble bee","two spotted bumble bee"],"4-spotted chaser":["4-spotted chaser","4 spotted chaser","four-spotted chaser","four spotted chaser","four-spotted skimmer","four spotted skimmer"],"6-spotted tiger beetle":["6-spotted tiger beetle","6 spotted tiger beetle","six-spotted tiger beetle","six spotted tiger beetle","six-spotted green tiger beetle"],"7-spotted ladybird":["7-spotted ladybird","7 spotted ladybird","seven-spotted ladybird","seven spotted ladybird","seven-spotted lady beetle","seven spotted lady beetle"],"10-spotted skimmer":["10-spotted skimmer","10 spotted skimmer","ten-spotted skimmer","ten spotted skimmer"],"12-spotted skimmer":["12-spotted skimmer","12 spotted skimmer","twelve-spotted skimmer","twelve spotted skimmer"],"14-spotted ladybird":["14-spotted ladybird","14 spotted ladybird","fourteen-spotted ladybird","fourteen spotted ladybird","14-spotted lady beetle","fourteen-spotted lady beetle"],"22-spotted ladybird":["22-spotted ladybird","22 spotted ladybird","twenty-two-spotted ladybird","twenty two spotted ladybird","22-spot ladybird","22 spot ladybird"],"88 butterfly":["88 butterfly","eighty-eight butterfly","eighty eight butterfly"],"737":["737","boeing 737","b737"],"747":["747","boeing 747","b747","jumbo jet"],"777":["777","boeing 777","b777","triple seven","triple-seven"],"787":["787","boeing 787","b787","787 dreamliner","boeing 787 dreamliner","dreamliner"],"2-seater paraglider":["2-seater paraglider","2 seater paraglider","two-seater paraglider","two seater paraglider","tandem paraglider"],"3-axis ultralight":["3-axis ultralight","3 axis ultralight","three-axis ultralight","three axis ultralight"],"4-engine jet":["4-engine jet","4 engine jet","four-engine jet","four engine jet","four-engined jet","four engined jet"],"6-rotor drone":["6-rotor drone","6 rotor drone","six-rotor drone","six rotor drone","hexacopter"],"8-rotor drone":["8-rotor drone","8 rotor drone","eight-rotor drone","eight rotor drone","octocopter","octocopter drone"],
});

Object.assign(alternativeNames, {
  razorbill:["razorbill","razor-billed auk","razor billed auk"],"red admiral":["red admiral","red admiral butterfly","red admirable"],"red-bellied woodpecker":["red-bellied woodpecker","red bellied woodpecker"],"red-breasted merganser":["red-breasted merganser","red breasted merganser"],"red-breasted nuthatch":["red-breasted nuthatch","red breasted nuthatch"],"red-cockaded woodpecker":["red-cockaded woodpecker","red cockaded woodpecker"],"red-eyed vireo":["red-eyed vireo","red eyed vireo"],"red-headed woodpecker":["red-headed woodpecker","red headed woodpecker"],"red-naped sapsucker":["red-naped sapsucker","red naped sapsucker"],"red-necked grebe":["red-necked grebe","red necked grebe"],"red-necked phalarope":["red-necked phalarope","red necked phalarope","northern phalarope"],"red-shouldered hawk":["red-shouldered hawk","red shouldered hawk"],"red-tailed hawk":["red-tailed hawk","red tailed hawk","redtail hawk","red-tail hawk"],"red-winged blackbird":["red-winged blackbird","red winged blackbird","redwing blackbird"],redhead:["redhead","redhead duck","red-headed duck","red headed duck"],redpoll:["redpoll","common redpoll"],"rhinoceros beetle":["rhinoceros beetle","rhino beetle","rhinoceros beetles"],"ring-billed gull":["ring-billed gull","ring billed gull"],"ring-necked duck":["ring-necked duck","ring necked duck","ringbill","ring-billed duck"],"ring-necked pheasant":["ring-necked pheasant","ring necked pheasant","common pheasant"],robin:["robin","robin bird"],"rock pigeon":["rock pigeon","rock dove","common pigeon"],rocket:["rocket","rocket vehicle","rocket-powered vehicle"],roller:["roller","roller bird"],"rose-breasted grosbeak":["rose-breasted grosbeak","rose breasted grosbeak"],"roseate spoonbill":["roseate spoonbill","roseate spoon-bill"],"rosy maple moth":["rosy maple moth","great silk moth"],rotorcraft:["rotorcraft","rotary-wing aircraft","rotary wing aircraft"],"rough-legged hawk":["rough-legged hawk","rough legged hawk","rough-legged buzzard","rough legged buzzard"],"ruby-crowned kinglet":["ruby-crowned kinglet","ruby crowned kinglet"],"ruby-throated hummingbird":["ruby-throated hummingbird","ruby throated hummingbird"],"ruddy turnstone":["ruddy turnstone","turnstone"],"ruffed grouse":["ruffed grouse","ruffed partridge"],
  sailplane:["sailplane","sail plane"],"sand martin":["sand martin","bank swallow"],"sandhill crane":["sandhill crane","sand hill crane"],sandpiper:["sandpiper","sand piper"],"satin bowerbird":["satin bowerbird","satin bower bird"],sawfly:["sawfly","saw fly"],"scarab beetle":["scarab beetle","scarab"],"scissor-tailed flycatcher":["scissor-tailed flycatcher","scissor tailed flycatcher","scissortail","scissor-tail"],scorpionfly:["scorpionfly","scorpion fly"],"sea eagle":["sea eagle","sea-eagle"],seagull:["seagull","sea gull"],seaplane:["seaplane","sea plane"],"sharp-shinned hawk":["sharp-shinned hawk","sharp shinned hawk","sharpie"],shearwater:["shearwater","shearwater bird"],"short-eared owl":["short-eared owl","short eared owl"],"silk moth":["silk moth","silkmoth","silk-moth"],"skimmer dragonfly":["skimmer dragonfly","skimmer"],"skipper butterfly":["skipper butterfly","skipper"],skylark:["skylark","sky lark","eurasian skylark"],"snow bunting":["snow bunting","snowflake"],"snowy owl":["snowy owl","snow owl"],sora:["sora","sora rail","carolina rail"],sparrowhawk:["sparrowhawk","sparrow hawk"],"sphinx moth":["sphinx moth","sphinx-moth","hawkmoth","hawk moth"],spoonbill:["spoonbill","spoonbill bird"],"spotted towhee":["spotted towhee","rufous-sided towhee","rufous sided towhee"],"steller's jay":["steller's jay","stellers jay","steller jay"],"stink bug":["stink bug","stinkbug","shield bug"],stonefly:["stonefly","stone fly"],"storm petrel":["storm petrel","storm-petrel"],"sulphur butterfly":["sulphur butterfly","sulfur butterfly","sulphur","sulfur"],sunbird:["sunbird","sun bird"],"swainson's hawk":["swainson's hawk","swainsons hawk"],"swainson's thrush":["swainson's thrush","swainsons thrush","olive-backed thrush","olive backed thrush"],swallow:["swallow","swallow bird"],"swallow-tailed kite":["swallow-tailed kite","swallow tailed kite"],"swallowtail butterfly":["swallowtail butterfly","swallowtail"],swift:["swift","swift bird"],
  "tachinid fly":["tachinid fly","tachinid"],tanager:["tanager","tanager bird"],"tarantula hawk":["tarantula hawk","tarantula hawk wasp","tarantula wasp"],"tawny owl":["tawny owl","brown owl"],teal:["teal","teal duck"],termite:["termite","flying termite","winged termite"],tern:["tern","tern bird"],thrasher:["thrasher","thrasher bird"],thrips:["thrips","thrip"],thrush:["thrush","thrush bird"],"tiger moth":["tiger moth","tiger-moth"],"tiger swallowtail":["tiger swallowtail","tiger swallowtail butterfly"],tiltrotor:["tiltrotor","tilt-rotor","tiltrotor aircraft","tilt-rotor aircraft"],tit:["tit","tit bird"],titmouse:["titmouse","tit mouse"],"tobacco hornworm moth":["tobacco hornworm moth","tobacco hawk moth","tobacco hawkmoth","carolina sphinx moth","carolina sphinx"],towhee:["towhee","towhee bird"],"townsend's solitaire":["townsend's solitaire","townsends solitaire"],"townsend's warbler":["townsend's warbler","townsends warbler"],treehopper:["treehopper","tree hopper"],"tricolored blackbird":["tricolored blackbird","tri-colored blackbird","tri colored blackbird"],"tricolored heron":["tricolored heron","tri-colored heron","tri colored heron","louisiana heron"],"tsetse fly":["tsetse fly","tsetse","tsetse-fly"],"tufted puffin":["tufted puffin","crested puffin"],"tufted titmouse":["tufted titmouse","tufted tit"],"tundra swan":["tundra swan","whistling swan"],turkey:["turkey","wild turkey"],"turkey vulture":["turkey vulture","turkey buzzard"],"turtle dove":["turtle dove","turtle-dove","european turtle dove"],"twin-spotted sphinx":["twin-spotted sphinx","twin spotted sphinx","twin-spotted sphinx moth","twin spotted sphinx moth"],"two-barred flasher":["two-barred flasher","two barred flasher","two-barred flasher butterfly","two barred flasher butterfly"],"two-spotted bumblebee":["two-spotted bumblebee","two spotted bumblebee","two-spotted bumble bee","two spotted bumble bee"],"tyrant flycatcher":["tyrant flycatcher","tyrant-flycatcher"],
});

validAnswers.push(
  "q400", "qf-4 phantom", "qf-16", "quadcopter", "quad city challenger", "quail", "quail-dove", "quail-plover", "quail-thrush", "quailfinch", "quailfinch indigobird", "quaker parrot", "quebec emerald", "quebracho crested tinamou", "queen alexandra's birdwing", "queen ant", "queen bee", "queen butterfly", "queen carola's parotia", "queen of spain fritillary", "queen termite", "queen victoria's riflebird", "queen whydah", "quelea", "queensland birdwing", "queensland blossom bat", "queensland day moth", "queensland fruit fly", "queensland tube-nosed bat", "quetzal", "quetzalcoatlus", "quickie aircraft", "quicksilver ultralight", "qilian bluetail",
  "raven", "razorbill", "red admiral", "red-bellied woodpecker", "red-breasted merganser", "red-breasted nuthatch", "red-cockaded woodpecker", "red-eyed vireo", "red-headed woodpecker", "red-naped sapsucker", "red-necked grebe", "red-necked phalarope", "red-shouldered hawk", "red-tailed hawk", "red-winged blackbird", "redhead", "redpoll", "redstart", "rhinoceros beetle", "ring-billed gull", "ring-necked duck", "ring-necked pheasant", "robin", "rock pigeon", "rocket", "roller", "rose-breasted grosbeak", "roseate spoonbill", "rosy maple moth", "rotorcraft", "rough-legged hawk", "royal tern", "ruby-crowned kinglet", "ruby-throated hummingbird", "ruddy duck", "ruddy turnstone", "ruffed grouse", "rufous hummingbird", "rusty blackbird",
  "sailplane", "sand martin", "sanderling", "sandhill crane", "sandpiper", "satin bowerbird", "sawfly", "scarab beetle", "scarlet macaw", "scarlet tanager", "scissor-tailed flycatcher", "scorpionfly", "sea eagle", "seagull", "seaplane", "sharp-shinned hawk", "shearwater", "short-eared owl", "silk moth", "silverfish moth", "skimmer dragonfly", "skipper butterfly", "skylark", "snow bunting", "snow goose", "snowy egret", "snowy owl", "song sparrow", "sora", "sparrow", "sparrowhawk", "sphinx moth", "spoonbill", "spotted owl", "spotted sandpiper", "spotted towhee", "starling", "steller's jay", "stink bug", "stonefly", "storm petrel", "sulphur butterfly", "summer tanager", "sunbird", "swainson's hawk", "swainson's thrush", "swallow", "swallow-tailed kite", "swallowtail butterfly", "swan", "swift",
  "tachinid fly", "tanager", "tarantula hawk", "tawny owl", "teal", "termite", "tern", "thrasher", "thrips", "thrush", "tiger beetle", "tiger moth", "tiger swallowtail", "tiltrotor", "tit", "titmouse", "tobacco hornworm moth", "towhee", "townsend's solitaire", "townsend's warbler", "tree swallow", "treehopper", "tricolored blackbird", "tricolored heron", "trumpeter swan", "tsetse fly", "tufted duck", "tufted puffin", "tufted titmouse", "tundra swan", "turkey", "turkey vulture", "turtle dove", "twin-spotted sphinx", "two-barred flasher", "two-spotted bumblebee", "tyrant flycatcher"
);

validAnswers.push(
  "ua pou monarch","udzungwa forest partridge","uganda woodland warbler","uhehe fiscal","ultramarine flycatcher","ultramarine grosbeak","ultramarine kingfisher","ultramarine lorikeet","uluguru bushshrike","uluguru mountain greenbul","uluguru violet-backed sunbird","unadorned flycatcher","undulated antpitta","undulated antshrike","undulated tinamou","unicolored antwren","unicolored blackbird","unicolored jay","unicolored tapaculo","unicolored thrush","uniform antshrike","uniform crake","uniform finch","uniform swiftlet","uniform treehunter","uniform woodcreeper","unspotted saw-whet owl","unstreaked tit-tyrant","upcher's warbler","upland antshrike","upland buzzard","upland goose","upland pipit","upland sandpiper","ural owl","urich's tyrannulet","urrao antpitta","ursula's sunbird","usambara akalat","usambara double-collared sunbird","usambara eagle-owl","usambara hyliota","usambara thrush","usambara weaver","ussher's flycatcher",
  "vampire bat","vampire moth","variable hawk","variable oriole","variable sunbird","varied bunting","varied sittella","varied thrush","variegated fairywren","variegated flycatcher","variegated fritillary","variegated laughingthrush","variegated meadowhawk","variegated tinamou","velvet ant","velvet-fronted nuthatch","velvet-purple coronet","velvet scoter","velvet-mantled drongo","venezuelan bristle-tyrant","venezuelan flowerpiercer","venezuelan flycatcher","venezuelan parakeet","venezuelan sylph","verdin","vermilion cardinal","vermilion flycatcher","vermilion tanager","vesper sparrow","victoria crowned pigeon","village indigobird","village weaver","vinaceous dove","vinaceous rosefinch","violet-backed starling","violet-bellied hummingbird","violet-capped hummingbird","violet-crowned hummingbird","violet-crowned woodnymph","violet-green swallow","violet-headed hummingbird","violet-necked lory","violet-tailed sunbird","violetear","vireo","virginia rail","virginia's warbler","vulture","vulturine guineafowl",
  "wandering albatross","wandering glider","wandering tattler","warbler","wasp","waxwing","weevil","western bluebird","western grebe","western gull","western kingbird","western meadowlark","western sandpiper","western tanager","western tiger swallowtail","western wood-pewee","whimbrel","white admiral","white-breasted nuthatch","white-crowned pigeon","white-crowned sparrow","white-eyed vireo","white-faced ibis","white stork","white-tailed hawk","white-tailed kite","white-throated sparrow","white-throated swift","white-winged dove","whitefly","whooping crane","wild turkey","willow warbler","wilson's phalarope","wilson's plover","wilson's snipe","wilson's storm-petrel","wilson's warbler","winter wren","wood duck","wood pigeon","wood thrush","wood wasp","woodpecker","worm-eating warbler","wren","wryneck",
  "x-1","x-15","x-21","x-22","x-24","x-26 frigate","x-28 sea skimmer","x-29","xantus's hummingbird","xantus's murrelet","xavier's greenbul","xeme","xenops","xingu scale-backed antbird","xingu scythebill","xinjiang ground-jay"
);

validAnswers.forEach((answer) => {
  alternativeNames[answer] ??= [answer];
});

validAnswers.push("yellow-bellied flycatcher","yellow-bellied sapsucker","yellow-billed cuckoo","yellow-billed magpie","yellow-billed stork","yellow-breasted chat","yellow-crowned night heron","yellow-eyed junco","yellow fever mosquito","yellow-fronted canary","yellow-headed blackbird","yellow-legged gull","yellow-rumped warbler","yellow-throated vireo","yellow-throated warbler","yellow wagtail","yellow warbler","yellow-banded bumblebee","yellowhammer","yellowjacket","yellowtail moth","yellowwing","zabulon skipper","zanzibar red bishop","zapata sparrow","zapata wren","zappey's flycatcher","zebra blue","zebra dove","zebra finch","zebra longwing","zebra mosaic","zebra swallowtail","zebra waxbill","zenaida dove","zestos skipper","zigzag heron","zimmer's tapaculo","zimmer's tody-tyrant","zimmer's woodcreeper","zitting cisticola","zone-tailed hawk","2-spotted bumblebee","4-spotted chaser","6-spotted tiger beetle","7-spotted ladybird","10-spotted skimmer","12-spotted skimmer","14-spotted ladybird","22-spotted ladybird","88 butterfly","737","747","757","767","777","787","2-seater paraglider","3-axis ultralight","4-engine jet","6-rotor drone","8-rotor drone");

validAnswers.forEach((answer) => { alternativeNames[answer] ??= [answer]; });

Object.assign(alternativeNames, {
  "q400": ["q400", "bombardier q400", "dash 8 q400", "de havilland canada dash 8-400", "dash 8-400"], "qf-4 phantom": ["qf-4 phantom", "qf-4", "qf-4 phantom ii"], "qf-16": ["qf-16", "qf-16 full scale aerial target", "qf-16 full-scale aerial target"], quadcopter: ["quadcopter", "quadrotor", "quadrotor helicopter", "quadrotor drone"], "quad city challenger": ["quad city challenger", "challenger ultralight", "challenger aircraft"], "quail-dove": ["quail-dove", "quail dove"], "quail-plover": ["quail-plover", "quail plover", "lark buttonquail", "lark button-quail"], "quail-thrush": ["quail-thrush", "quail thrush"], quailfinch: ["quailfinch", "quail finch"], "quailfinch indigobird": ["quailfinch indigobird", "quail-finch indigobird", "quail finch indigobird"], "quaker parrot": ["quaker parrot", "quaker parakeet", "monk parakeet", "monk parrot"], "quebec emerald": ["quebec emerald", "quebec emerald dragonfly"], "quebracho crested tinamou": ["quebracho crested tinamou", "quebracho-crested tinamou"], "queen alexandra's birdwing": ["queen alexandra's birdwing", "queen alexandra's birdwing butterfly", "queen alexandras birdwing", "queen alexandra birdwing"], "queen ant": ["queen ant", "ant queen"], "queen bee": ["queen bee", "bee queen"], "queen butterfly": ["queen butterfly", "queen", "queen monarch"], "queen carola's parotia": ["queen carola's parotia", "queen carolas parotia", "queen carola's six-wired bird-of-paradise", "queen carolas six-wired bird-of-paradise"], "queen of spain fritillary": ["queen of spain fritillary", "queen of spain fritillary butterfly"], "queen termite": ["queen termite", "termite queen"], "queen victoria's riflebird": ["queen victoria's riflebird", "queen victorias riflebird", "victoria's riflebird", "victorias riflebird"], "queen whydah": ["queen whydah", "shaft-tailed whydah", "shaft tailed whydah"], quelea: ["quelea", "red-billed quelea", "red billed quelea"], "queensland birdwing": ["queensland birdwing", "queensland birdwing butterfly", "richmond birdwing", "richmond birdwing butterfly"], "queensland blossom bat": ["queensland blossom bat", "common blossom bat", "southern blossom bat", "eastern blossom bat"], "queensland day moth": ["queensland day moth", "queensland day-moth"], "queensland fruit fly": ["queensland fruit fly", "queensland fruitfly", "qfly", "q-fly"], "queensland tube-nosed bat": ["queensland tube-nosed bat", "queensland tube nosed bat", "eastern tube-nosed bat", "eastern tube nosed bat"], quetzalcoatlus: ["quetzalcoatlus", "quetzalcoatlus northropi"], "quickie aircraft": ["quickie aircraft", "quickie", "quickie q1", "quickie q-1"], "quicksilver ultralight": ["quicksilver ultralight", "quicksilver aircraft", "quicksilver ultralight aircraft"], "qilian bluetail": ["qilian bluetail", "qilian red-flanked bluetail", "qilian red flanked bluetail"],
});

validAnswers.push(
  "pterodactyl",
  "space shuttle",
  "ufo",
  "flying squirrel",
  "flying fish",
  "boomerang",
  "frisbee",
  "broomstick",
  "magic carpet",
  "paper lantern",
  "satellite",
  "jetpack",
  "flying car",
  "angel",
  "leaf",
  "feather",
  "dandelion seed",
  "soap bubble",
  "firework",
  "ball",
  "umbrella",
  "dragon",
  "fairy",
  "flag",
  "missile",
  "meteor",
  "comet"
);
Object.assign(alternativeNames, {
  airplane: [...alternativeNames.airplane, "plane", "fixed-wing aircraft"],
  rocket: [...alternativeNames.rocket, "rocketship", "rocket ship", "space rocket"],
  glider: [...alternativeNames.glider, "hang glider", "hang-glider"],
  pterodactyl: ["pterodactyl", "pterodactylus", "pterosaur"],
  "space shuttle": ["space shuttle", "shuttle", "spacecraft", "spaceship"],
  ufo: ["ufo", "unidentified flying object", "flying saucer"],
  "flying squirrel": ["flying squirrel", "sugar glider"],
  "flying fish": ["flying fish"],
  boomerang: ["boomerang"],
  frisbee: ["frisbee", "flying disc", "disc"],
  broomstick: ["broomstick", "flying broomstick", "witch's broom"],
  "magic carpet": ["magic carpet", "flying carpet"],
  "paper lantern": ["paper lantern", "sky lantern", "chinese lantern"],
  satellite: ["satellite", "artificial satellite"],
  jetpack: ["jetpack", "jet pack"],
  "flying car": ["flying car"],
  angel: ["angel"],
  leaf: ["leaf", "falling leaf"],
  feather: ["feather"],
  "dandelion seed": ["dandelion seed", "dandelion fluff", "dandelion puff"],
  "soap bubble": ["soap bubble", "bubble"],
  firework: ["firework", "fireworks"],
  ball: ["ball", "flying ball"],
  umbrella: ["umbrella", "flying umbrella"],
  dragon: ["dragon", "flying dragon"],
  fairy: ["fairy", "flying fairy"],
  flag: ["flag", "flying flag"],
  "passenger plane": [...alternativeNames["passenger plane"], "airliner"],
  missile: ["missile", "guided missile"],
  meteor: ["meteor", "shooting star"],
  comet: ["comet", "space comet"],
  "helicopter seed": [...alternativeNames["helicopter seed"], "maple seed", "maple helicopter"],
});

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function normalizeAnswer(answer: string) {
  return answer.trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizeForSpellcheck(answer: string) {
  return normalizeAnswer(answer).replace(/[^a-z0-9]/g, "");
}

function editDistance(first: string, second: string) {
  const matrix = Array.from({ length: first.length + 1 }, () =>
    Array<number>(second.length + 1).fill(0)
  );

  for (let firstIndex = 0; firstIndex <= first.length; firstIndex += 1) {
    matrix[firstIndex][0] = firstIndex;
  }
  for (let secondIndex = 0; secondIndex <= second.length; secondIndex += 1) {
    matrix[0][secondIndex] = secondIndex;
  }

  for (let firstIndex = 1; firstIndex <= first.length; firstIndex += 1) {
    for (let secondIndex = 1; secondIndex <= second.length; secondIndex += 1) {
      const substitutionCost =
        first[firstIndex - 1] === second[secondIndex - 1] ? 0 : 1;
      matrix[firstIndex][secondIndex] = Math.min(
        matrix[firstIndex][secondIndex - 1] + 1,
        matrix[firstIndex - 1][secondIndex] + 1,
        matrix[firstIndex - 1][secondIndex - 1] + substitutionCost
      );

      if (
        firstIndex > 1 &&
        secondIndex > 1 &&
        first[firstIndex - 1] === second[secondIndex - 2] &&
        first[firstIndex - 2] === second[secondIndex - 1]
      ) {
        matrix[firstIndex][secondIndex] = Math.min(
          matrix[firstIndex][secondIndex],
          matrix[firstIndex - 2][secondIndex - 2] + 1
        );
      }
    }
  }

  return matrix[first.length][second.length];
}

const answerTerms = [
  ...validAnswers.map((answer) => ({
    canonicalAnswer: normalizeAnswer(answer),
    spelling: normalizeForSpellcheck(answer),
  })),
  ...Object.entries(alternativeNames).flatMap(([canonicalAnswer, alternatives]) =>
    alternatives.map((alternative) => ({
      canonicalAnswer: normalizeAnswer(canonicalAnswer),
      spelling: normalizeForSpellcheck(alternative),
    }))
  ),
];

function spellcheckSuggestionFor(answer: string) {
  const spelling = normalizeForSpellcheck(answer);
  if (!spelling) return undefined;

  const maxDistance = spelling.length <= 4 ? 1 : spelling.length <= 8 ? 2 : 3;
  let closestDistance = maxDistance + 1;
  const closestCanonicalAnswers = new Set<string>();

  answerTerms.forEach((term) => {
    const distance = editDistance(spelling, term.spelling);
    if (distance > maxDistance || distance > closestDistance) return;

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCanonicalAnswers.clear();
    }
    closestCanonicalAnswers.add(term.canonicalAnswer);
  });

  return closestCanonicalAnswers.size === 1
    ? [...closestCanonicalAnswers][0]
    : undefined;
}

function canonicalAnswerFor(answer: string) {
  const normalizedAnswer = normalizeAnswer(answer);

  if (validAnswers.some((validAnswer) => normalizeAnswer(validAnswer) === normalizedAnswer)) {
    return normalizedAnswer;
  }

  const exactAliasMatch = Object.entries(alternativeNames).find(([, alternatives]) =>
    alternatives.some(
      (alternative) => normalizeAnswer(alternative) === normalizedAnswer
    )
  )?.[0];

  return exactAliasMatch ? normalizeAnswer(exactAliasMatch) : spellcheckSuggestionFor(answer);
}

function isStoredSubmission(value: unknown): value is Submission {
  if (!value || typeof value !== "object") return false;

  const submission = value as Submission;
  return (
    typeof submission.answer === "string" &&
    typeof submission.isCorrect === "boolean" &&
    typeof submission.isDuplicate === "boolean" &&
    (submission.canonicalAnswer === undefined ||
      typeof submission.canonicalAnswer === "string") &&
    (submission.duplicateOf === undefined ||
      typeof submission.duplicateOf === "string")
  );
}

function duplicateMessage(submission: Submission) {
  const isDifferentName =
    submission.duplicateOf &&
    normalizeAnswer(submission.answer) !== normalizeAnswer(submission.duplicateOf);

  return isDifferentName
    ? `Already guessed with a different name: ${submission.duplicateOf}`
    : "Already guessed";
}

function RapidFlier() {
  const storageKey = `rapid-flier-complete-${todayKey()}`;
  const resultsStorageKey = `rapid-flier-results-${todayKey()}`;
  const [gameState, setGameState] = useState<"intro" | "playing" | "results">(
    "intro"
  );
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [answer, setAnswer] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const score = submissions.reduce(
    (total, submission) => total + (submission.isCorrect ? 1 : 0),
    0
  );
  const correctCount = submissions.filter(
    (submission) => submission.isCorrect
  ).length;

  useEffect(() => {
    if (localStorage.getItem(storageKey)) {
      try {
        const savedResults = JSON.parse(
          localStorage.getItem(resultsStorageKey) ?? "[]"
        );
        if (Array.isArray(savedResults)) {
          setSubmissions(savedResults.filter(isStoredSubmission));
        }
      } catch {
        localStorage.removeItem(resultsStorageKey);
      }
      setGameState("results");
    }
  }, [resultsStorageKey, storageKey]);

  useEffect(() => {
    if (gameState === "playing") {
      localStorage.setItem(resultsStorageKey, JSON.stringify(submissions));
    }
  }, [gameState, resultsStorageKey, submissions]);

  useEffect(() => {
    if (gameState !== "playing") return;

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setGameState("results");
          localStorage.setItem(storageKey, "complete");
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [gameState, storageKey]);

  useEffect(() => {
    if (gameState === "playing") inputRef.current?.focus();
  }, [gameState]);

  const startGame = () => {
    // Lock the day as soon as the flight starts, so refreshing cannot create a second run.
    localStorage.setItem(storageKey, "started");
    localStorage.removeItem(resultsStorageKey);
    setSecondsLeft(30);
    setSubmissions([]);
    setAnswer("");
    setGameState("playing");
  };

  const resetGameForTesting = () => {
    localStorage.removeItem(storageKey);
    localStorage.removeItem(resultsStorageKey);
    setSecondsLeft(30);
    setSubmissions([]);
    setAnswer("");
    setGameState("intro");
  };

  const submitAnswer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedAnswer = answer.trim();
    const normalized = normalizeAnswer(trimmedAnswer);
    if (!normalized || gameState !== "playing") return;

    const canonicalAnswer = canonicalAnswerFor(normalized);
    const previousCorrectSubmission = submissions.find(
      (submission) =>
        submission.isCorrect &&
        (submission.canonicalAnswer ?? normalizeAnswer(submission.answer)) ===
          canonicalAnswer
    );
    const isDuplicate = Boolean(previousCorrectSubmission);
    const isCorrect = Boolean(canonicalAnswer) && !isDuplicate;

    setSubmissions((current) => [
      ...current,
      {
        answer: trimmedAnswer,
        isCorrect,
        isDuplicate,
        canonicalAnswer,
        duplicateOf: previousCorrectSubmission?.answer,
      },
    ]);
    setAnswer("");
  };

  return (
    <main className="rapid-flier-page">
      <div className="rapid-flier-sky rapid-flier-sky-one" />
      <div className="rapid-flier-sky rapid-flier-sky-two" />
      <section className="rapid-flier-shell" aria-label="Rapid Flier">
        <div className="rapid-flier-brand">
          <span className="rapid-flier-plane" aria-hidden="true">
            ➤
          </span>
          <p>Daily Trivia</p>
        </div>

        {gameState === "intro" && (
          <div className="rapid-flier-card rapid-flier-intro">
            <h1 id="rapid-flier-title">Rapid Flier</h1>
            <p className="rapid-flier-intro-subtitle">How many can you list?</p>
            <button
              className="rapid-flier-play"
              type="button"
              onClick={startGame}
            >
              Launch today's flight
            </button>
          </div>
        )}

        {gameState === "playing" && (
          <div className="rapid-flier-card rapid-flier-game" aria-live="polite">
            <div className="rapid-flier-game-header">
              <div>
                <p className="rapid-flier-eyebrow">Name as many</p>
                <h2>{category}</h2>
              </div>
              <div
                className="rapid-flier-timer"
                aria-label={`${secondsLeft} seconds remaining`}
              >
                <span>{secondsLeft}</span>
                <small>sec</small>
              </div>
            </div>
            <div className="rapid-flier-progress" aria-hidden="true">
              <span style={{ width: `${(secondsLeft / 30) * 100}%` }} />
            </div>
            <p className="rapid-flier-score">
              Score <strong>{score}</strong>
            </p>
            <form className="rapid-flier-form" onSubmit={submitAnswer}>
              <label className="sr-only" htmlFor="rapid-flier-answer">
                Your answer
              </label>
              <input
                id="rapid-flier-answer"
                ref={inputRef}
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                placeholder="Type an answer…"
                autoComplete="off"
                maxLength={60}
              />
              <button type="submit">
                Send <span aria-hidden="true">➤</span>
              </button>
            </form>
            <div className="rapid-flier-submissions" aria-live="polite">
              {submissions.length === 0 ? (
                <p>Answers will land here.</p>
              ) : (
                submissions
                  .slice(-5)
                  .reverse()
                  .map((submission, index) => (
                    <div
                      key={`${submission.answer}-${submissions.length - index}`}
                      className={
                        submission.isCorrect ? "is-correct" : "is-wrong"
                      }
                    >
                      <span>{submission.answer}</span>
                      <b>
                        {submission.isCorrect
                          ? "+1"
                          : submission.isDuplicate
                          ? duplicateMessage(submission)
                          : "not on today’s list"}
                      </b>
                    </div>
                  ))
              )}
            </div>
          </div>
        )}

        {gameState === "results" && (
          <div className="rapid-flier-card rapid-flier-results">
            <p className="rapid-flier-eyebrow">Time’s up!</p>
            <h2>Nice flying.</h2>
            <div className="rapid-flier-final-score">
              <strong>{score}</strong>
              <span>{score === 1 ? "point" : "points"}</span>
            </div>
            <p className="rapid-flier-result-summary">
              You found {correctCount}{" "}
              {correctCount === 1 ? "answer" : "answers"}.
            </p>
            <div className="rapid-flier-results-list">
              {submissions.map((submission, index) => (
                <div
                  key={`${submission.answer}-${index}`}
                  className={submission.isCorrect ? "is-correct" : "is-wrong"}
                >
                  <span>{submission.answer}</span>
                  <b>
                    {submission.isCorrect
                      ? "Correct +1"
                      : submission.isDuplicate
                      ? duplicateMessage(submission)
                      : "Not on today’s list"}
                  </b>
                </div>
              ))}
            </div>
            <p className="rapid-flier-note">
              A fresh challenge takes off at midnight UTC.
            </p>
            <button
              className="rapid-flier-test-reset"
              type="button"
              onClick={resetGameForTesting}
            >
              Reset game for testing
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default RapidFlier;
