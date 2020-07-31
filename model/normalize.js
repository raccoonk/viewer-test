const tour = {
  id: 1,
  title: '',
  description: '',
  thumbnail: '',
  scenes: [
    {
      url: scene.layer[nowLayer].url,
    hotspots: scene.hospots.concat(scene.layer.hospots),
    }
  ],
  minimaps: [
    {
      scenes: [
        {
          id: 1,
          x: 0,
          y: 0,
          yaw: 0,
        }, {
          id: 2,
          x: 0,
          y: 0,
          yaw: 0,
        }
      ]
    },
    {
      scenes: [
        {
          id: 1,
          x: 0,
          y: 0,
          yaw: 0,
        }, {
          id: 2,
          x: 0,
          y: 0,
          yaw: 0,
        }
      ]
    }
  ],


  importantPlace: [1, 2],
  nowTier: 1,
  nowScene: 1,
  nowLayer: 1,
}

/*
  scene[nowScene].layer[nowLayer]


  function createScene(scene, nowScene, nowLayer) {

  }
*/