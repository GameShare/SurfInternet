
// 存储了所有怪物的数据
var enemyData = {
    GreenSlime:{chsName:"绿色史莱姆",life:35,attack:18,guard:1,gold:1,src:"Monster01-01.png",offsetY:0},
    RedSlime:{chsName:"红色史莱姆",life:45,attack:20,guard:2,gold:2,src:"Monster01-01.png",offsetY:-32},
    BigSlime:{chsName:"大史莱姆",life:130,attack:60,guard:3,gold:8,src:"Monster01-01.png",offsetY:-64},
    SlimeLord:{chsName:"史莱姆王",life:360,attack:310,guard:20,gold:40,src:"Monster01-01.png",offsetY:-96},

    SkeletonC:{chsName:"骷髅人",life:50,attack:42,guard:6,gold:6,src:"Monster02-01.png",offsetY:0},
    SkeletonB:{chsName:"骷髅士兵",life:55,attack:52,guard:12,gold:8,src:"Monster02-01.png",offsetY:-32},
    SkeletonA:{chsName:"骷髅队长",life:100,attack:65,guard:15,gold:30,src:"Monster02-01.png",offsetY:-64},
    GhostSoldier:{chsName:"鬼战士",life:220,attack:180,guard:30,gold:35,src:"Monster02-01.png",offsetY:-96},

    Bat:{chsName:"小蝙蝠",life:35,attack:38,guard:3,gold:3,src:"Monster03-01.png",offsetY:0},
    BigBat:{chsName:"大蝙蝠",life:60,attack:100,guard:8,gold:12,src:"Monster03-01.png",offsetY:-32},
    VampireBat:{chsName:"吸血蝙蝠",life:200,attack:390,guard:90,gold:50,src:"Monster03-01.png",offsetY:-64},
    Vampire:{chsName:"吸血鬼",life:444,attack:199,guard:66,gold:144,src:"Monster03-01.png",offsetY:-96},

    Swordsman:{chsName:"双手剑士",life:100,attack:680,guard:50,gold:55,src:"Monster04-01.png",offsetY:0},

    GateKeeperC:{chsName:"初级卫兵",life:50,attack:48,guard:22,gold:12,src:"Monster05-01.png",offsetY:0},
    GateKeeperB:{chsName:"中级卫兵",life:100,attack:180,guard:110,gold:100,src:"Monster05-01.png",offsetY:-32},
    GateKeeperA:{chsName:"高级卫兵",life:180,attack:460,guard:360,gold:200,src:"Monster05-01.png",offsetY:-64},

    Priest:{chsName:"初级法师",life:60,attack:32,guard:8,gold:5,src:"Monster06-01.png",offsetY:0},
    SuperionPriest:{chsName:"高级法师",life:100,attack:95,guard:30,gold:22,src:"Monster06-01.png",offsetY:-32},
    MagicianB:{chsName:"初级巫师",life:220,attack:370,guard:110,gold:80,src:"Monster06-01.png",offsetY:-64},
    MagicianA:{chsName:"高级巫师",life:200,attack:380,guard:130,gold:90,src:"Monster06-01.png",offsetY:-96},

    GoldenKnight:{chsName:"金骑士",life:120,attack:150,guard:50,gold:100,src:"Monster07-01_1_1.png",offsetY:0},
    Knight:{chsName:"骑士",life:160,attack:230,guard:105,gold:65,src:"111",offsetY:0},
    Soldier:{chsName:"战士",life:210,attack:200,guard:65,gold:45,src:"Monster07-04_1_1.png",offsetY:0},
    DarkKnight:{chsName:"黑暗骑士",life:180,attack:430,guard:210,gold:120,src:"111",offsetY:0},

    TheMagicSergeant:{chsName:"魔法警卫",life:230,attack:450,guard:100,gold:100,src:"Monster08-01_1_1.png",offsetY:0},

    Zombie:{chsName:"兽人",life:260,attack:85,guard:5,gold:18,src:"Monster09-01.png",offsetY:0},
    ZombieKnight:{chsName:"兽人武士",life:320,attack:120,guard:15,gold:30,src:"Monster09-01.png",offsetY:-32},

    Rock:{chsName:"石头人",life:20,attack:100,guard:68,gold:28,src:"Monster10-01_1_1.png",offsetY:0},

    SlimeMan:{chsName:"史莱姆人",life:320,attack:140,guard:20,gold:30,src:"Monster11-01_1_1.png",offsetY:0},

    GiantOctopus:{chsName:"大乌贼",life:1200,attack:180,guard:20,gold:100,src:"111",offsetY:0},
    TheMagicSergeantZeno:{chsName:"魔王齐诺",life:800,attack:500,guard:100,gold:500,src:"111",offsetY:0},
    Dragon:{chsName:"魔龙",life:1500,attack:600,guard:250,gold:800,src:"111",offsetY:0},
    GreatMagicMaster:{chsName:"大法师",life:4500,attack:560,guard:310,gold:1000,src:"111",offsetY:0}
}

// 存储了所有墙的数据
var wallData = {
    normal:{src:"Event01-Wall01.png", offsetX:-32 },
    darkNormal:{src:"Event01-Wall01.png", offsetX:-32 },
    darkWall:{src:"", offsetX:0 },
    iconWall:{src:"Event01-Wall01.png", offsetX:-96 },
}

// 门
var doorData = {
    yellowDoor:{src:"Event01-Door01.png", offsetX:0, require:"yellowKey"},
    blueDoor:{src:"Event01-Door01.png", offsetX:-32, require:"blueKey"},
    redDoor:{src:"Event01-Door01.png", offsetX:-64, require:"redKey"},
    lockedDoor:{src:"Event01-Door01.png", offsetX:-96, }
}

// 熔岩
var lavaData = {
    fireLava:{src:"Event01-Lava01.png", offsetY:0}
}

// 物品
var goodsData = {
    yellowKey:{src:"Item01-01.png", offsetX:0 },
    blueKey:{src:"Item01-01.png", offsetX:-32 },
    redKey:{src:"Item01-01.png", offsetX:-64 },
    redLife:{src:"Item01-02.png", offsetX:0 },
    blueLife:{src:"Item01-02.png", offsetX:-32 },
    redGem:{src:"Item01-Gem01.png", offsetX:0 },
    blueGem:{src:"Item01-Gem01.png", offsetX:-32 }
}

// 楼梯
var stairsData = {
    upStairs:{src:"upStairs.png"},
    downStairs:{src:"downStairs.png"}
}

// NPC
var NPCData = {
    wiserMan :{src:"NPC01-01.png", offsetY:0 },
    dealer:{src:"NPC01-01.png", offsetY:-32 },
    thief:{src:"NPC01-01.png", offsetY:-64 }
}

var bigDealerData = {
    bigDealerL:{src:"Event01-Other03.png", offsetX:0 },
    bigDealerM:{src:"Event01-Other03.png", offsetX:-32 },
    bigDealerR:{src:"Event01-Other03.png", offsetX:-64 }
}

var swordData = {
    sword10:{src:"Item01-08.png", offsetX:0, offsetY:0, attack:10 },
    sword20:{src:"Item01-08.png", offsetX:-32, offsetY:0, attack:20 },
    sword40:{src:"Item01-08.png", offsetX:-64, offsetY:0, attack:40 },
    sword50:{src:"Item01-08.png", offsetX:-96, offsetY:0, attack:50 },
    sword100:{src:"Item01-08.png", offsetX:0, offsetY:-32, attack:100 }
}

var shieldData = {
    shield10:{src:"Item01-08.png", offsetX:0, offsetY:-64, guard:10 },
    shield20:{src:"Item01-08.png", offsetX:-32, offsetY:-64, guard:20 },
    shield40:{src:"Item01-08.png", offsetX:-64, offsetY:-64, guard:40 },
    shield50:{src:"Item01-08.png", offsetX:-96, offsetY:-64, guard:50 },
    shield100:{src:"Item01-08.png", offsetX:0, offsetY:-96, guard:100 }
}

// type:对话类型   1代表普通对话（包含事件对话），2代表有交易的对话，若有event，则代表对话后有事件发生
// 150507 发生更改,不再通过 判断对话事件交给了主js, 此处仅用于保存对话内容
var sayingData = {
    wiserMan3:{
        words:["孩子，这里有一本九阴真经，你要吗","好啊好啊","你真的要么？","好啊好啊好啊好啊","然而我没有，所以你得不到啊哈哈哈！！（注：怪物手册功能尚未实装）"]
    },
    faceBossAt3F:{
        words:["魔王：我是魔王","勇者：哦，你好魔王","魔王：死ね","勇者：啊！！！！！"]
    },
    firstWithThiefAt2F:{
        words:["喂！","喂！醒醒","快去探险吧，我先走啦"]
    }
}

// t 指的是 type , f 指的是 feature
// 地图的读取格式为              map[欲读取的楼层][x坐标][y坐标].t/f
// 上下楼初始位置的读取格式为    map[欲读取的楼层][11].downX/downY/upX/upY
var map = [
    [],
    // 1
    [
        [{t:"stairs",f:"upStairs"},{t:"none",f:"none"},{t:"enemy",f:"GreenSlime"},{t:"enemy",f:"RedSlime"},{t:"enemy",f:"GreenSlime"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"}],
        [{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"none",f:"none"}],
        [{t:"goods",f:"redLife"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"door",f:"yellowDoor"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"goods",f:"redGem"},{t:"goods",f:"yellowKey"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"none",f:"none"}],
        [{t:"none",f:"none"},{t:"enemy",f:"SkeletonC"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"goods",f:"blueGem"},{t:"goods",f:"redLife"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"none",f:"none"}],
        [{t:"wall",f:"normal"},{t:"door",f:"yellowDoor"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"door",f:"yellowDoor"},{t:"wall",f:"normal"},{t:"none",f:"none"}],
        [{t:"goods",f:"yellowKey"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"door",f:"yellowDoor"},{t:"enemy",f:"Bat"},{t:"enemy",f:"Priest"},{t:"enemy",f:"Bat"},{t:"wall",f:"normal"},{t:"none",f:"none"}],
        [{t:"none",f:"none"},{t:"enemy",f:"SkeletonB"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"none",f:"none"}],
        [{t:"wall",f:"normal"},{t:"door",f:"yellowDoor"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"}],
        [{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"door",f:"yellowDoor"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"wall",f:"normal"},{t:"door",f:"yellowDoor"},{t:"wall",f:"normal"}],
        [{t:"goods",f:"redLife"},{t:"none",f:"none"},{t:"goods",f:"yellowKey"},{t:"wall",f:"normal"},{t:"goods",f:"yellowKey"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"enemy",f:"Bat"},{t:"none",f:"none"}],
        [{t:"goods",f:"redLife"},{t:"none",f:"none"},{t:"goods",f:"yellowKey"},{t:"wall",f:"normal"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"none",f:"none"},{t:"wall",f:"normal"},{t:"enemy",f:"GreenSlime"},{t:"goods",f:"blueLife"},{t:"enemy",f:"GreenSlime"}],
        {downX:0,downY:0,upX:0,upY:1}
    ],
    // 2
    [
        /*0*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"door",f:"blueDoor"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"GateKeeperB"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"GateKeeperB"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"NPC",f:"wiserMan"}],

        /*4*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"iconWall"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"iconWall"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*6*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"NPC",f:"thief"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"NPC",f:"dealer"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"iconWall"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"iconWall"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*9*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"blueLife"},/*3*/{t:"goods",f:"blueLife"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"stairs",f:"upStairs"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"blueLife"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"iconWall"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"iconWall"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*11*/{downX:1,downY:0,upX:9,upY:0}
    ],
    // 3
    [
        /*0*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"goods",f:"blueGem"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"goods",f:"blueLife"},/*5*/{t:"goods",f:"yellowKey"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"redLife"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"goods",f:"redLife"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"goods",f:"blueLife"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"goods",f:"blueLife"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"enemy",f:"Bat"},/*10*/{t:"none",f:"none"}],

        /*2*/[/*0*/{t:"enemy",f:"Priest"},/*1*/{t:"none",f:"none"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"goods",f:"blueKey"},/*5*/{t:"goods",f:"yellowKey"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*3*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"NPC",f:"wiserMan"}],

        /*4*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"Bat"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"enemy",f:"GreenSlime"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*5*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*6*/[/*0*/{t:"enemy",f:"SkeletonC"},/*1*/{t:"none",f:"none"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"redLife"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"goods",f:"yellowKey"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"enemy",f:"Priest"},/*10*/{t:"goods",f:"yellowKey"}],

        /*8*/[/*0*/{t:"goods",f:"redLife"},/*1*/{t:"goods",f:"redGem"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*9*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"enemy",f:"RedSlime"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"none",f:"none"},/*10*/{t:"stairs",f:"upStairs"}],

        /*11*/{downX:10,downY:1,upX:10,upY:9}
    ],
    // 4
    [
    /*0*/[/*0*/{t:"none",f:"none"},/*1*/{t:"goods",f:"blueKey"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"bigDealer",f:"bigDealerL"},/*5*/{t:"bigDealer",f:"bigDealerM"},/*6*/{t:"bigDealer",f:"bigDealerR"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"NPC",f:"wiserMan"},/*10*/{t:"none",f:"none"}],

    /*1*/[/*0*/{t:"goods",f:"redLife"},/*1*/{t:"none",f:"none"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"blueLife"}],

    /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"SkeletonB"},/*10*/{t:"none",f:"none"}],

    /*3*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"door",f:"yellowDoor"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"door",f:"blueDoor"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"door",f:"yellowDoor"},/*10*/{t:"wall",f:"normal"}],

    /*4*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"Priest"},/*2*/{t:"none",f:"none"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"RedSlime"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"enemy",f:"SkeletonC"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

    /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

    /*6*/[/*0*/{t:"enemy",f:"RedSlime"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"GreenSlime"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

    /*7*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

    /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"Bat"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"Priest"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

    /*9*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"enemy",f:"GreenSlime"},/*3*/{t:"none",f:"none"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"goods",f:"redGem"},/*7*/{t:"none",f:"none"},/*8*/{t:"goods",f:"redLife"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

    /*10*/[/*0*/{t:"stairs",f:"upStairs"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"enemy",f:"GreenSlime"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"GreenSlime"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"stairs",f:"downStairs"}],

    /*11*/{downX:9,downY:10,upX:9,upY:0}
    ],
    // 5
    [
        /*0*/[/*0*/{t:"stairs",f:"upStairs"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"RedSlime"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"door",f:"yellowDoor"},/*10*/{t:"none",f:"none"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"goods",f:"yellowKey"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"enemy",f:"GreenSlime"},/*8*/{t:"enemy",f:"GreenSlime"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"RedSlime"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"door",f:"yellowDoor"},/*2*/{t:"enemy",f:"Bat"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"goods",f:"yellowKey"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*3*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"enemy",f:"Bat"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"goods",f:"yellowKey"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*4*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"Priest"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*5*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"Bat"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"enemy",f:"GreenSlime"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"enemy",f:"SkeletonB"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"RedSlime"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"enemy",f:"GreenSlime"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"goods",f:"blueGem"},/*1*/{t:"goods",f:"yellowKey"},/*2*/{t:"goods",f:"redLife"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*9*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"darkNormal"},/*9*/{t:"none",f:"none"},/*10*/{t:"sword",f:"sword10"}],

        /*11*/{downX:10,downY:1,upX:1,upY:0}
    ],
    // 6
    [
        /*0*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"enemy",f:"Priest"},/*7*/{t:"none",f:"none"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"enemy",f:"GreenSlime"},/*10*/{t:"none",f:"none"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"enemy",f:"RedSlime"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"goods",f:"redLife"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"SkeletonC"},/*10*/{t:"none",f:"none"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"door",f:"yellowDoor"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"none",f:"none"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"NPC",f:"dealer"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"Bat"}],

        /*4*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"RedSlime"},/*3*/{t:"enemy",f:"Priest"},/*4*/{t:"none",f:"none"},/*5*/{t:"goods",f:"yellowKey"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"SkeletonC"},/*8*/{t:"enemy",f:"SkeletonB"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*7*/[/*0*/{t:"enemy",f:"Priest"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"NPC",f:"wiserMan"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"door",f:"yellowDoor"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"none",f:"none"},/*9*/{t:"door",f:"yellowDoor"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"Bat"},/*2*/{t:"none",f:"none"},/*3*/{t:"goods",f:"blueGem"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"RedSlime"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"RedSlime"}],

        /*9*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"GreenSlime"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"enemy",f:"SkeletonC"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"goods",f:"redLife"},/*8*/{t:"goods",f:"redLife"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"stairs",f:"upStairs"}],

        /*11*/{downX:1,downY:0,upX:9,upY:10}
    ],
    // 7
    [
        /*0*/[/*0*/{t:"stairs",f:"upStairs"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"redGem"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"NPC",f:"dealer"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"GreenSlime"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"redLife"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"RedSlime"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"enemy",f:"Bat"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"enemy",f:"RedSlime"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"SkeletonB"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"redLife"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"GreenSlime"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*4*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"door",f:"blueDoor"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"door",f:"yellowDoor"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"SkeletonC"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"SkeletonB"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"Priest"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"door",f:"yellowDoor"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"SkeletonB"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"enemy",f:"Bat"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"RedSlime"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"blueLife"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*9*/[/*0*/{t:"enemy",f:"GreenSlime"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"enemy",f:"GreenSlime"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"Priest"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"RedSlime"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"goods",f:"blueLife"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"stairs",f:"downStairs"}],

        /*11*/{downX:9,downY:10,upX:1,upY:0}
    ],
    // 8
    [
        /*0*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"none",f:"none"},/*5*/{t:"stairs",f:"upStairs"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"yellowKey"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"goods",f:"redKey"},/*10*/{t:"none",f:"none"}],

        /*2*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"door",f:"yellowDoor"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"blueLife"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"redLife"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"door",f:"lockedDoor"},/*10*/{t:"wall",f:"normal"}],

        /*4*/[/*0*/{t:"goods",f:"redLife"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"Priest"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"GateKeeperC"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"GateKeeperC"}],

        /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"RedSlime"},/*2*/{t:"enemy",f:"GreenSlime"},/*3*/{t:"enemy",f:"RedSlime"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"Bat"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"door",f:"yellowDoor"},/*10*/{t:"wall",f:"normal"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"Bat"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"SkeletonC"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"Priest"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*9*/[/*0*/{t:"enemy",f:"GreenSlime"},/*1*/{t:"none",f:"none"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"goods",f:"redGem"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"goods",f:"blueKey"},/*7*/{t:"goods",f:"redLife"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"SkeletonC"}],

        /*10*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"Bat"},/*2*/{t:"door",f:"blueDoor"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"goods",f:"blueGem"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"goods",f:"yellowKey"},/*7*/{t:"none",f:"none"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"enemy",f:"SkeletonB"},/*10*/{t:"none",f:"none"}],

        /*11*/{downX:1,downY:0,upX:1,upY:5}
    ],
    // 9
    [
        /*0*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"SkeletonC"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"none",f:"none"},/*5*/{t:"stairs",f:"downStairs"},/*6*/{t:"none",f:"none"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"redLife"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"goods",f:"yellowKey"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*2*/[/*0*/{t:"enemy",f:"SkeletonB"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"door",f:"blueDoor"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"goods",f:"yellowKey"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"none",f:"none"},/*6*/{t:"goods",f:"yellowKey"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*4*/[/*0*/{t:"goods",f:"blueGem"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"Bat"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"none",f:"none"},/*5*/{t:"goods",f:"redGem"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"darkNormal"},/*10*/{t:"wall",f:"normal"}],

        /*5*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"RedSlime"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"SkeletonB"}],

        /*6*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"none",f:"none"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"enemy",f:"SkeletonB"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"shield",f:"shield10"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*7*/[/*0*/{t:"enemy",f:"SkeletonB"},/*1*/{t:"none",f:"none"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*8*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"Priest"}],

        /*9*/[/*0*/{t:"none",f:"none"},/*1*/{t:"goods",f:"redLife"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"none",f:"none"},/*4*/{t:"enemy",f:"SkeletonC"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"enemy",f:"Bat"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"SkeletonC"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"stairs",f:"upStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"door",f:"blueDoor"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"door",f:"yellowDoor"},/*6*/{t:"none",f:"none"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"enemy",f:"Priest"},/*9*/{t:"none",f:"none"},/*10*/{t:"goods",f:"redLife"}],

        /*11*/{downX:1,downY:5,upX:10,upY:1}
    ],
    // 10
    [
        /*0*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*1*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*2*/[/*0*/{t:"enemy",f:"SkeletonC"},/*1*/{t:"enemy",f:"SkeletonC"},/*2*/{t:"enemy",f:"SkeletonC"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"SkeletonC"},/*9*/{t:"enemy",f:"SkeletonC"},/*10*/{t:"enemy",f:"SkeletonC"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"SkeletonB"},/*2*/{t:"none",f:"none"},/*3*/{t:"door",f:"lockedDoor"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"SkeletonA"},/*6*/{t:"none",f:"none"},/*7*/{t:"door",f:"lockedDoor"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"SkeletonB"},/*10*/{t:"none",f:"none"}],

        /*4*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*5*/[/*0*/{t:"enemy",f:"SkeletonC"},/*1*/{t:"goods",f:"blueGem"},/*2*/{t:"enemy",f:"SkeletonC"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"SkeletonC"},/*9*/{t:"goods",f:"redGem"},/*10*/{t:"enemy",f:"SkeletonC"}],

        /*6*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"SkeletonB"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"SkeletonB"},/*10*/{t:"none",f:"none"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"door",f:"redDoor"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*9*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"Priest"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"Priest"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"goods",f:"blueLife"}],

        /*11*/{downX:10,downY:0,upX:0,upY:0}
    ],
    /*11*/
    [
        /*0*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"goods",f:"redGem"},/*5*/{t:"none",f:"none"},/*6*/{t:"door",f:"yellowDoor"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"goods",f:"redLife"},/*10*/{t:"goods",f:"yellowKey"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"shield",f:"shield20"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"Bat"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"enemy",f:"Zombie"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*3*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"door",f:"lockedDoor"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"BigBat"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*4*/[/*0*/{t:"enemy",f:"SuperionPriest"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"SuperionPriest"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"enemy",f:"Zombie"},/*5*/{t:"none",f:"none"},/*6*/{t:"door",f:"yellowDoor"},/*7*/{t:"enemy",f:"SuperionPriest"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"goods",f:"redLife"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"goods",f:"blueLife"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"BigBat"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"door",f:"yellowDoor"},/*7*/{t:"enemy",f:"BigSlime"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*7*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"door",f:"blueDoor"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"enemy",f:"BigBat"}],

        /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"BigBat"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"BigSlime"},/*4*/{t:"door",f:"yellowDoor"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"Bat"},/*10*/{t:"none",f:"none"}],

        /*9*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"door",f:"yellowDoor"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"goods",f:"yellowKey"},/*2*/{t:"goods",f:"yellowKey"},/*3*/{t:"goods",f:"yellowKey"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"stairs",f:"downStairs"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"goods",f:"blueLife"},/*8*/{t:"enemy",f:"BigBat"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"stairs",f:"upStairs"}],

        /*11*/{downX:10,downY:5,upX:10,upY:10}
    ],
    /*12*/
    [
        /*0*/[/*0*/{t:"NPC",f:"dealer"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"goods",f:"yellowKey"},/*5*/{t:"goods",f:"redGem"},/*6*/{t:"goods",f:"yellowKey"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*1*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"enemy",f:"BigBat"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"enemy",f:"SuperionPriest"},/*5*/{t:"none",f:"none"},/*6*/{t:"enemy",f:"SuperionPriest"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"enemy",f:"Zombie"},/*10*/{t:"none",f:"none"}],

        /*3*/[/*0*/{t:"door",f:"yellowDoor"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"door",f:"yellowDoor"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*4*/[/*0*/{t:"none",f:"none"},/*1*/{t:"enemy",f:"SuperionPriest"},/*2*/{t:"none",f:"none"},/*3*/{t:"door",f:"yellowDoor"},/*4*/{t:"none",f:"none"},/*5*/{t:"enemy",f:"Zombie"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"redLife"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"BigBat"}],

        /*5*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"enemy",f:"SuperionPriest"},/*7*/{t:"door",f:"yellowDoor"},/*8*/{t:"none",f:"none"},/*9*/{t:"goods",f:"blueGem"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"goods",f:"yellowKey"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"goods",f:"blueLife"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"goods",f:"yellowKey"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"BigSlime"}],

        /*7*/[/*0*/{t:"goods",f:"yellowKey"},/*1*/{t:"goods",f:"blueKey"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"door",f:"blueDoor"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"door",f:"yellowDoor"}],

        /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"enemy",f:"Zombie"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"bigDealer",f:"bigDealerL"},/*5*/{t:"bigDealer",f:"bigDealerM"},/*6*/{t:"bigDealer",f:"bigDealerR"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"enemy",f:"BigSlime"},/*9*/{t:"none",f:"none"},/*10*/{t:"enemy",f:"Zombie"}],

        /*9*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"door",f:"yellowDoor"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"goods",f:"redLife"},/*5*/{t:"none",f:"none"},/*6*/{t:"goods",f:"redLife"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"wall",f:"normal"}],

        /*10*/[/*0*/{t:"stairs",f:"upStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"enemy",f:"Bat"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"enemy",f:"Bat"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"stairs",f:"downStairs"}],

        /*11*/{downX:10,downY:10,upX:10,upY:0}
    ],
    /*13*/
    [
        /*0*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"lava",f:"fireLava"},/*4*/{t:"lava",f:"fireLava"},/*5*/{t:"lava",f:"fireLava"},/*6*/{t:"lava",f:"fireLava"},/*7*/{t:"lava",f:"fireLava"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*1*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"lava",f:"fireLava"},/*4*/{t:"lava",f:"fireLava"},/*5*/{t:"lava",f:"fireLava"},/*6*/{t:"lava",f:"fireLava"},/*7*/{t:"lava",f:"fireLava"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*2*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"lava",f:"fireLava"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"lava",f:"fireLava"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*3*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*4*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"sword",f:"sword100"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*5*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"lava",f:"fireLava"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*6*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"lava",f:"fireLava"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"lava",f:"fireLava"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"lava",f:"fireLava"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*7*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"lava",f:"fireLava"},/*4*/{t:"lava",f:"fireLava"},/*5*/{t:"lava",f:"fireLava"},/*6*/{t:"lava",f:"fireLava"},/*7*/{t:"lava",f:"fireLava"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*8*/[/*0*/{t:"lava",f:"fireLava"},/*1*/{t:"lava",f:"fireLava"},/*2*/{t:"lava",f:"fireLava"},/*3*/{t:"lava",f:"fireLava"},/*4*/{t:"lava",f:"fireLava"},/*5*/{t:"lava",f:"fireLava"},/*6*/{t:"lava",f:"fireLava"},/*7*/{t:"lava",f:"fireLava"},/*8*/{t:"lava",f:"fireLava"},/*9*/{t:"lava",f:"fireLava"},/*10*/{t:"lava",f:"fireLava"}],

        /*9*/[/*0*/{t:"wall",f:"normal"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"door",f:"yellowDoor"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*10*/[/*0*/{t:"stairs",f:"downStairs"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"stairs",f:"upStairs"}],

        /*11*/{downX:10,downY:0,upX:10,upY:10}
    ],
    /*哈*/
    [
        /*0*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*1*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*2*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"none",f:"none"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*3*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"wall",f:"normal"}],

        /*4*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"wall",f:"normal"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"wall",f:"normal"}],

        /*5*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*6*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"none",f:"none"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"none",f:"none"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"none",f:"none"},/*10*/{t:"none",f:"none"}],

        /*7*/[/*0*/{t:"none",f:"none"},/*1*/{t:"wall",f:"normal"},/*2*/{t:"wall",f:"normal"},/*3*/{t:"wall",f:"normal"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*8*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*9*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"none",f:"none"},/*7*/{t:"none",f:"none"},/*8*/{t:"none",f:"none"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*10*/[/*0*/{t:"none",f:"none"},/*1*/{t:"none",f:"none"},/*2*/{t:"none",f:"none"},/*3*/{t:"none",f:"none"},/*4*/{t:"none",f:"none"},/*5*/{t:"wall",f:"normal"},/*6*/{t:"wall",f:"normal"},/*7*/{t:"wall",f:"normal"},/*8*/{t:"wall",f:"normal"},/*9*/{t:"wall",f:"normal"},/*10*/{t:"none",f:"none"}],

        /*11*/{downX:0,downY:0,upX:0,upY:0}
    ]

]