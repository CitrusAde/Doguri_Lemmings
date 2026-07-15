const defaultMaps = [
    {
        id: "stage_1",
        name: "스테이지 1: 튜토리얼",
        bgStyle: "url('bg_1.jpg') center/cover",
        terrainData: "map_1.png",
        spawns: [{x: 100, y: 100}],   
        exits: [{x: 850, y: 450}]
    },
    {
        id: "stage_2",
        name: "스테이지 2: 높은 언덕",
        bgStyle: "url('bg_2.jpg') center/cover",
        terrainData: "map_2.png",
        spawns: [{x: 50, y: 50}],   
        exits: [{x: 900, y: 500}]
    },
    // ... 이렇게 100개든 200개든 이 파일에만 추가하면 됩니다!
];
