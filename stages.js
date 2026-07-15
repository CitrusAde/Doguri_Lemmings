// stages.js
// 스테이지 정보를 관리하는 데이터 파일입니다.

const defaultMaps = [
    {
        id: "stage_1",
        name: "스테이지 1: 튜토리얼 (엔진 기본 맵)",
        desc: "테스트용으로 코드로 그려진 기본 맵입니다.",
        isDefault: true,
        bgStyle: "#1a2a3a",
        spawns: [{x: 80, y: 80}],
        exits: [{x: 850, y: 450}]
    },
    {
        id: "stage_2",
        name: "스테이지 2: 첫 번째 탐험",
        desc: "배경(bg_1.jpg) 위에 지형(map_1.png)을 얹은 맵입니다.",
        isDefault: false,
        bgStyle: "url('bg_1.jpg') center/cover", // 도구리가 통과하는 예쁜 배경
        terrainData: "map_1.png",               // 도구리가 밟고 파괴할 투명 지형
        spawns: [{x: 100, y: 100}],   
        exits: [{x: 850, y: 450}]
    },
    {
        id: "stage_3",
        name: "스테이지 3: 험난한 여정",
        desc: "배경(bg_2.jpg) 위에 지형(map_2.png)을 얹은 맵입니다.",
        isDefault: false,
        bgStyle: "url('bg_2.jpg') center/cover",
        terrainData: "map_2.png",
        spawns: [{x: 50, y: 50}],   
        exits: [{x: 900, y: 500}]
    }
    // 맵을 추가하려면 쉼표(,)를 찍고 위 블록을 복사해서 이어붙이세요!
];
