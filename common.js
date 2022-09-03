
const music=[
  {
    id:0,
    image:'http://p2.music.126.net/-qMscnByecEQ4XrBuec3sQ==/109951165165805968.jpg?param=130y130',
    name:"化身孤岛的鲸",
    src:"http://music.163.com/song/media/outer/url?id=1465313631.mp3",
    isPlay:false,
    time:"4:25"
  },
  {
    id:1,
    image:"http://p2.music.126.net/cOeFUUpGW7NffUB4RxRtVw==/109951163737041359.jpg?param=130y130",
    name:"Dreamworld",
    src:"http://music.163.com/song/media/outer/url?id=1334624319.mp3",
    isPlay:false,
    time:"5:03"
  },
  {
    id:2,
    image:"http://p2.music.126.net/oHsUAzKmq_7gnM097XaDGg==/109951163761695428.jpg?param=130y130",
    name:"椿",
    src:"http://music.163.com/song/media/outer/url?id=1336575693.mp3",
    isPlay:false,
    time:"1:22"
  },
  {
    id:3,
    image:"http://p1.music.126.net/baCMw_b3IU8GMpo32r3TSg==/3280942697537551.jpg?param=130y130",
    name:"여름비 (7月)",
    src:"http://music.163.com/song/media/outer/url?id=33933040.mp3",
    isPlay:false,
    time:"1:03"
  },
  {
    id:4,
    image:"http://p1.music.126.net/YO5WXtkBCUAE-Sy-UFMhuA==/109951167726839610.jpg?param=130y130",
    name:"To You",
    src:"http://music.163.com/song/media/outer/url?id=1967909971.mp3",
    isPlay:false,
    time:"2:55"
  },
  {
    id:5,
    image:"http://p2.music.126.net/YJ72-pBKMlCrV_mQ5eyXzw==/109951167571655726.jpg?param=130y130",
    name:"There",
    src:"http://music.163.com/song/media/outer/url?id=1957531727.mp3",
    isPlay:false,
    time:"2:17"
  },
  {
    id:6,
    image:"http://p2.music.126.net/WM8iZlp2mzUxFcz-wmMe3A==/109951164466038411.jpg?param=130y130",
    name:"屿",
    src:"http://music.163.com/song/media/outer/url?id=1400844438.mp3",
    isPlay:false,
    time:"2:00"
  },
  {
    id:7,
    image:"http://p2.music.126.net/1gP7YLGn61RUc5KnARRAbg==/109951166785038796.jpg?param=130y130",
    name:"Thunder, Rains",
    src:"http://music.163.com/song/media/outer/url?id=1906081930.mp3",
    isPlay:false,
    time:"2:52"
  },
  {
    id:8,
    image:"http://p2.music.126.net/wBvTnD96Jt0tTkOrfeEOvA==/109951166957536574.jpg?param=130y130",
    name:"The beach on Tuesday",
    src:"http://music.163.com/song/media/outer/url?id=1913501456.mp3",
    isPlay:false,
    time:"2:36"
  },
  {
    id:9,
    image:"http://p2.music.126.net/-EV4XhJEJn_Ib7ebS1OHhg==/109951164820593469.jpg?param=130y130",
    name:"有可能的夜晚",
    src:"http://music.163.com/song/media/outer/url?id=1432427879.mp3",
    isPlay:false,
    time:"5:24"
  },
  {
    id:10,
    image:"http://p2.music.126.net/499AYZ3epP1T7GJYvnJZZQ==/109951165671947083.jpg?param=130y130",
    name:"Rubia",
    src:"http://music.163.com/song/media/outer/url?id=1815684465.mp3",
    isPlay:false,
    time:"3:14"
  }

]
//获取音乐列表
function getMusicList() {
  let list = [];
  for (var i = 0; i < music.length; i++) {
    let obj = {};
    obj.id = music[i].id;
    obj.image = music[i].image;
    obj.name = music[i].name;
    obj.src=music[i].src;
    obj.isPlay=music[i].isPlay;
    obj.time=music[i].time;
    list.push(obj);
  }
  return list; //返回音乐列表
}


// 对外暴露接口
module.exports = {
  getMusicList: getMusicList
 
}