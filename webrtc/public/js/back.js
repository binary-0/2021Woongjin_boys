const firebaseConfig = {
  apiKey: "AIzaSyDshLWdGu-ICP7rm4hOtuq4KMYOOLrWEPc",
  authDomain: "woongjin-boys.firebaseapp.com",
  projectId: "woongjin-boys",
  storageBucket: "woongjin-boys.appspot.com",
  messagingSenderId: "384724988797",
  appId: "1:384724988797:web:c620d4f105ebbedd991214",
  measurementId: "G-C86JZT2WGB",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let database = firebase.firestore();
let date = new Date();

let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();
let hour = date.getHours().toString();
let min = date.getMinutes().toString();
date = year + "-" + month + "-" + day;

let present_btn = 1;
let modal1 = 0;
let modal2 = 0;
document.getElementById("fourthbutton").addEventListener("click", function () {
  console.log("log button click\n");
  if (modal1 === 0) {
    document.getElementById("modal1").style.display = "flex";
    modal1 = 1;
  } else {
    document.getElementById("modal1").style.display = "none";
    modal1 = 0;
  }
});
document.getElementById("modal2_on").addEventListener("click", function () {
  console.log("modal click!");
  if (modal2 === 0) {
    document.getElementById("modal2").style.display = "flex";
    modal2 = 1;
  } else {
    document.getElementById("modal2").style.display = "none";
    modal2 = 0;
  }
});

function dp_menu() {
  let click = document.getElementById("drop1");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

$("#my_btn1").click(function () {
  $("#mypage_background" + String(present_btn)).hide();
  $("#mypage_background1").show();
  $("#my_btn" + String(present_btn)).css("background-color", "#8DD8D1");
  $("#my_btn1").css("background-color", "#13A99B");
  present_btn = 1;
});

$("#my_btn2").click(function () {
  $("#mypage_background" + String(present_btn)).hide();
  $("#mypage_background2").show();
  $("#my_btn" + String(present_btn)).css("background-color", "#8DD8D1");
  $("#my_btn2").css("background-color", "#13A99B");
  present_btn = 2;
});

$("#my_btn3").click(function () {
  $("#mypage_background" + String(present_btn)).hide();
  $("#mypage_background3").show();
  $("#my_btn" + String(present_btn)).css("background-color", "#8DD8D1");
  $("#my_btn3").css("background-color", "#13A99B");
  present_btn = 3;
});

// ?????? ?????????
let bar1 = document.querySelector("#bar0");
let bar_value1 = document.querySelector("#bar_value0");

function progress(per, bar, bar_value) {
  var progress = per / 100;
  var dashoffset = 2 * Math.PI * 54 * (1 - progress);
  bar_value.innerHTML = String(per) + "%"; //?????? ??????
  if (per < 30) {
    $("#bar0").css("stroke", "#EB9872");
  } else if (per < 60) {
    $("#bar0").css("stroke", " #FFEA2C");
  } else if (per <= 100) {
    $("#bar0").css("stroke", " #00CA08");
  }
  bar.style.strokeDashoffset = dashoffset;
  bar.style.strokeDasharray = 2 * Math.PI * 54;
}
function max_log(eng, neu, not) {
  if (eng > neu && eng > not) {
    return 2;
  } else if (neu > eng && neu > not) {
    return 1;
  } else {
    return 0;
  }
}

let agent1_on = [0, 0, 0, 0];
let agent1_count = [0, 0, 0, 0];
let agent1_length = [0, 0, 0, 0];
let student_agent_count = [0, 0, 0, 0]; //????????? agent ??????
let stu1_today_badge = [0, 0, 0, 0]; //?????????, ?????????, ?????????, ????????? ????????? ??????
let stu1_color = [0, 0, 0];
let ranking_score = [0, 0, 0, 0]; //?????? ?????? ??????
//let ranking = 1; //????????? ?????? ??????
let totalStamp = 0;
let log_update = [0, 0, 0];
let engage_again = 0;
let lecture_time = 120; //?????? ????????? 2???????????? ??????
let engagement_gauge = [50, 0, 0, 0]; //????????? ??????
let stu1_badge2 = 0;
let stu1_badge3 = 0;
let stu1_badge3_time = 0;
let engagement_gauge2 = [0, 0, 0, 0];
let fire_date;
let vad_data = 0;
//let total_score = 485; //?????? ??????

setInterval(function () {
  //console.log("objects_color : " + objects["colorStat"]);
  if (objects["colorStat"] === "2") {
    //Engagement ??????
    //console.log("Engagement!");
    stu1_color[0]++;
    log_update[0]++;
    engagement_gauge[0] = engagement_gauge[0] + (1 - engagement_gauge[0] / 100);
  } else if (objects["colorStat"] === "1") {
    //Neutral ??????
    //console.log("Neutral!");
    stu1_color[1]++;
    log_update[1]++;
  } else {
    //Not engagement ??????
    //console.log("Not engagement!");
    stu1_color[2]++;
    log_update[2]++;
    engagement_gauge[0] = engagement_gauge[0] - engagement_gauge[0] / 100;
  }
  totalStamp += 1;
  ranking_score[0] =
    ((stu1_color[0] * 2 + stu1_color[1]) / (totalStamp * 2)) * 100; //?????? ??????
  ranking_score[0] = Math.round(ranking_score[0]);
  /*
  progress(ranking_score[0], bar1, bar_value1); //?????? ????????? ????????????
  bar1.style.strokeDasharray = 2 * Math.PI * 54; 
  */
  //console.log("gauge : " + engagement_gauge[0] + ", " + "score : " +ranking_score[0]);

  //?????? ??????
  //console.log("vad_data : " + vad_data + ", objects[vad] : " + objects["vad"]);
  if (vad_data !== parseInt(objects["vad"])) {
    // ?????? ??????
    let agentboard = document.getElementById("agentbar4");
    let myboard = document.getElementById("mypage_bar4");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-agent4-noborder";
    mybar.style.width = "3%";
    pbar.className = "progress-agent4-noborder";
    pbar.style.width = "3%";    
    agentboard.appendChild(pbar);
    myboard.appendChild(mybar);
  } //?????? ?????? ??????
  else {
    //?????? ??? ??????
    let pboard = document.getElementById("agentbar4");
    let mypage = document.getElementById("mypage_bar4");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-bar-0";
    mybar.style.width = "0.25%";
    pbar.className = "progress-bar-0";
    pbar.style.width = "0.25%";
    pboard.appendChild(pbar);
    mypage.appendChild(mybar);
  }
  vad_data = parseInt(objects["vad"]);
  console.log("vad : " + objects["vad"]);

  //???????????? ??????
  if (objects["generalStat"][0] === "1") {
    agent1_on[0] += 1;
  } else {
    /*if(agent1_count[0] == 2)
                {
                     //??????????????? ????????? ?????? Ai-agent ?????? ????????? ??????
                    let agentboard = document.getElementById("agentbar1");
                    let myboard = document.getElementById("mypage_bar1");
                    let pbar = document.createElement("div");
                    let mybar = document.createElement("div");
                    mybar.className ="progress-agent1-noborder";                
                    mybar.style.width =  String(agent1_length[0]/2.5) + "%";
                    pbar.className ="progress-agent1-noborder";                
                    pbar.style.width = String(agent1_length[0]/2.5) + "%";
                    agentboard.appendChild(pbar);  
                    myboard.appendChild(mybar);              
                }*/
    agent1_on[0] = 0;
    agent1_count[0] = 0;
    let pboard = document.getElementById("agentbar1");
    let mypage = document.getElementById("mypage_bar1");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-bar-0";
    mybar.style.width = "0.25%";
    pbar.className = "progress-bar-0";
    pbar.style.width = "0.25%";
    pboard.appendChild(pbar);
    mypage.appendChild(mybar);
  }
  //???????????? ??????
  if (objects["generalStat"][1] === "1") {
    agent1_on[1] += 1;
  } else {
    agent1_on[1] = 0;
    agent1_count[1] = 0;
    let pboard = document.getElementById("agentbar2");
    let mypage = document.getElementById("mypage_bar2");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-bar-0";
    mybar.style.width = "0.25%";
    pbar.className = "progress-bar-0";
    pbar.style.width = "0.25%";
    pboard.appendChild(pbar);
    mypage.appendChild(mybar);
  }
  //?????? ??????
  if (objects["generalStat"][3] === "1") {
    agent1_on[2] += 1;
  } else {
    agent1_on[2] = 0;
    agent1_count[2] = 0;
    let pboard = document.getElementById("agentbar3");
    let mypage = document.getElementById("mypage_bar3");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-bar-0";
    mybar.style.width = "0.25%";
    pbar.className = "progress-bar-0";
    pbar.style.width = "0.25%";
    pboard.appendChild(pbar);
    mypage.appendChild(mybar);
    //?????? ????????? 20% ?????? ???????????? ?????? ??? ?????? ?????? ?????? ?????? ??????
    if (engage_again > lecture_time * (4 / 10)) {
      $("#today_badge1").show();
      stu1_today_badge[0]++;
    }
  }

  //???????????? ??????
  if (agent1_on[0] >= 5) {
    //?????? ?????? ??????
    //?????? ????????? ?????? ????????? progressbar ??????
    if (agent1_count[0] === 0) {
      student_agent_count[0]++;
      agent1_count[0] = 1;
      agentposturemaker();
    }
    /*
                if(agent1_on[0] >= 5 ) //?????? ?????? ??????
                {
                    agent1_length[0] = agent1_on[0];
                    agent1_count[0] = 2;
                }*/
    let agentboard = document.getElementById("agentbar1");
    let myboard = document.getElementById("mypage_bar1");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-agent1-noborder";
    mybar.style.width = "0.5%";
    pbar.className = "progress-agent1-noborder";
    pbar.style.width = "0.5%";
    agentboard.appendChild(pbar);
    myboard.appendChild(mybar);
  }

  //???????????? ??????
  if (agent1_on[1] >= 5) {
    if (agent1_count[1] === 0) {
      student_agent_count[1]++;
      agent1_count[1] = 1;
      agentfocusmaker();
    }
    let agentboard = document.getElementById("agentbar2");
    let myboard = document.getElementById("mypage_bar2");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-agent2-noborder";
    mybar.style.width = "0.5%";
    pbar.className = "progress-agent2-noborder";
    pbar.style.width = "0.5%";
    agentboard.appendChild(pbar);
    myboard.appendChild(mybar);
  }

  //?????? ??????
  if (agent1_on[2] >= 5) {
    if (agent1_count[2] === 0) {
      student_agent_count[2]++;
      agent1_count[2] = 1;
      agentsleepmaker();
    }
    let agentboard = document.getElementById("agentbar3");
    let myboard = document.getElementById("mypage_bar3");
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    mybar.className = "progress-agent3-noborder";
    mybar.style.width = "0.5%";
    pbar.className = "progress-agent3-noborder";
    pbar.style.width = "0.5%";
    agentboard.appendChild(pbar);
    myboard.appendChild(mybar);
  }

  /*
  //???????????? progressbar ?????????
  if (stu1_agent_count[0] === 0) {
    $(".progress-border_log").css("border-radius", "5px");
  }
  //???????????? ?????? ?????? agent ????????? ???????????? ?????????
  if (
    stu1_agent_count[0] === 0 &&
    (stu1_agent_count[1] > 0 || stu1_agent_count[2] > 0)
  ) {
    $("#progress_agent1").css("width", "0%");
  }
  */
  //30?????? ????????? ?????? ????????? ?????? ??????
  if (totalStamp % 45 === 0) {
    let log_board = document.getElementById("all_log");
    let mypage_board = document.getElementById("mypage_totalbar");
    let maxlog = max_log(log_update[0], log_update[1], log_update[2]);
    let pbar = document.createElement("div");
    let mybar = document.createElement("div");
    if (maxlog === 2) {
      //Engagement??? ?????? ?????? ???
      pbar.className = "progress-bar-green";
      pbar.style = "width : 10%";
      mybar.className = "progress-bar-green";
      mybar.style = "width : 10%";
    } else if (maxlog === 1) {
      //Neutral??? ?????? ?????? ???
      pbar.className = "progress-bar-yellow";
      pbar.style = "width : 10%";
      mybar.className = "progress-bar-yellow";
      mybar.style = "width : 10%";
    } else if (maxlog === 0) {
      //Not engagement??? ?????? ?????? ???
      pbar.className = "progress-bar-red";
      pbar.style = "width : 10%";
      mybar.className = "progress-bar-red";
      mybar.style = "width : 10%";
    }
    log_board.appendChild(pbar);
    mypage_board.appendChild(mybar);
    log_update.fill(0);
  }
  //??????????????? -> ?????? ????????? 2???????????? ??????
  //?????? ????????? 70% ?????? engagement -> ?????????
  if (stu1_color[0] > lecture_time * (7 / 10)) {
    $("#today_badge4").show();
    stu1_today_badge[3]++;
  }
  //????????? 20% ?????? ?????? ???????????? ?????? ????????? ??? -> ?????????
  if (agent1_on[2] > lecture_time * (2 / 10)) {
    stu1_badge2 = agent1_on[2];
  } else if (stu1_badge2 > 0) {
    engage_again++;
  } else if (agent1_on[2] > 0) {
    //?????? ????????? ??? ????????? ??????
    stu1_badge2 = 0;
  }

  //????????? ???????????? ?????? ?????? -> ?????????
  if (engagement_gauge[0] < 30) {
    stu1_badge3++;
  }
  //?????? ????????? 10% ?????? ??????????????? ??????
  else if (stu1_badge3 > lecture_time * (1 / 10) && engagement_gauge[0] > 70) {
    stu1_badge3_time++;
    if (stu1_badge3_time > stu1_badge3 * 2) {
      $("#today_badge2").show();
      stu1_today_badge[1]++;
    }
  }
  console.log("The number of connection : " + engLog.length);
  console.log("engLog : ");
  console.log(engLog);
  /*
  ?????? ??????
  console.log("engLog : [name]");
  if (engLog.length > 0) {
    //objects?????? ??????
    console.log(engLog[0].name);
  }
  */

  //?????? ?????? ?????????
  document.getElementById("getStatus").addEventListener("click", function () {
    document.getElementById("mypage_name").innerText = $("#studentName").val();
    document.getElementById("myname_log").innerText =
      $("#studentName").val() + " ?????? ?????? ????????? ??????";
    document.getElementById("agent_top").innerText =
      $("#studentName").val() + " AI - agent ????????????";
  });

  document.getElementById("studentName").addEventListener("click", function () {
    if ($("#studentName").val() === "Enter your name") {
      $("#studentName").placeholder("");
    }
  });

  //Start BroadCast ?????? ????????? ???
  //console.log(engLog.length);
  for (let i = 0; i < engLog.length; i++) {
    let student_board = document.getElementById("student_board" + String(i));
    if (engLog[i].name === $("#studentName").val()) {
      student_board.className = "log_person_me";
    } else {
      student_board.className = "log_person";
    }
    $("#" + "student_board" + String(i)).css("display", "flex");
    let student_name = "#student" + i + "_name";
    //console.log(engLog[i].name);
    //console.log(student_name);
    //?????? ????????????
    $(student_name).text(engLog[i].name);
    //?????? ????????????
    console.log(
      "name : " + engLog[i].name + ", score : " + parseInt(engLog[i].score)
    );
    //?????? ??? ????????????
    let bar = document.querySelector("#bar" + String(i));
    let bar_value = document.querySelector("#bar_value" + String(i));
    //console.log("progress check : "+ parseInt(engLog[i].score) + " " + bar + " " + bar_value);
    progress(parseInt(engLog[i].score), bar, bar_value); //?????? ?????? //bar.style.strokeDasharray = 2 * Math.PI * 54;
    //????????? ????????? ????????????
    engagement_gauge2[i] = parseInt(engLog[i].gauge);
    //?????????????????? ?????????
    //???????????? ?????? ?????? & ?????????????????? ????????????
    let agent1 = parseInt(engLog[i].agent[1]); //???????????? ??????
    let agent2 = parseInt(engLog[i].agent[3]); //?????? ?????? ??????
    let agent3 = parseInt(engLog[i].agent[5]); //?????? ?????? ??????
    console.log("sleep : " + engLog[i].agent[5]);
    //console.log("#progress_agent" + String(i) + "_1"); ?????????????????? ????????? ??????
    //console.log("#agent_text" + String(i) + "_1"); ???????????? ?????? ????????? ????????? ??????
    $("#progress_agent" + String(i) + "_1").css(
      "width",
      String(agent1 * 10) + "%"
    );
    $("#progress_agent" + String(i) + "_2").css(
      "width",
      String(agent2 * 10) + "%"
    );
    $("#progress_agent" + String(i) + "_3").css(
      "width",
      String(agent3 * 10) + "%"
    );
    $("#agent_text" + String(i) + "_1").text(String(agent1) + "???");
    $("#agent_text" + String(i) + "_2").text(String(agent2) + "???");
    $("#agent_text" + String(i) + "_3").text(String(agent3) + "???");
  }
}, 1000);
let total_score = 150; //?????? ??????
let ranking = 4; //????????? ?????? ??????
let today = ranking_score[0]; //?????? ??????
let changed_rank = 0; //????????? ??????
let my_name = $("#studentName").val(); //???????????? ????????? ??????
let document_id = year + "-" + month + "-" + day; //?????? ??????

function onAddRecord() {
  database
    .collection(my_name)
    //.doc(date) //????????? ????????? ????????? ??????
    .doc(document_id)
    .set(
      {
        //????????? ??????
        time: hour + "-" + min,
        name: my_name,
        badge_ary: stu1_today_badge,
        ranking: ranking,
        today_score: today,
        total_score: total_score,
        rank_change: changed_rank,
      },
      { merge: true }
    )
    .then(function () {
      onLoadData();
    });
}

var allData = [];
function onLoadData() {
  database
    .collection("?????????")
    //????????? ?????? ?????? ??????  .where("date","==","11-7")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var _t = {
          id: doc.id,
          value: doc.data(),
        };
        allData.push(doc.data());
        console.log(allData[0].name);
        console.log(allData[0].ranking);
        console.log("length : " + allData.length);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function onLoadRank(name, date) {
  database
    .collection(name)
    .where("time", "==", date)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        rank_change(
          doc.data().name,
          doc.data().ranking,
          doc.data().today_score,
          doc.data().total_score,
          doc.data().img,
          doc.data().rank_change
        );
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function onLoadBadge(name, date) {
  database
    .collection(name)
    .where("time", "==", date)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("badge_data : ");
        console.log(doc.data().total_badge);
        $("#small_badge1").text("????????? " + doc.data().total_badge[0] + "???");
        $("#small_badge2").text("????????? " + doc.data().total_badge[1] + "???");
        $("#small_badge3").text("????????? " + doc.data().total_badge[2] + "???");
        $("#small_badge4").text("????????? " + doc.data().total_badge[3] + "???");
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function ranking_update(date) {
  //date = "11-10";
  let names = ["?????????", "?????????", "?????????", "?????????"];
  for (let i = 0; i < names.length; i++) {
    onLoadRank(names[i], date);
  }
}

function rank_change(name, ranking, today, total, img, change) {
  console.log(ranking);
  console.log(change);
  ranking_change(ranking, change);
  if (ranking === 1) {
    document.getElementById("rank1_img").src = img;
    $("#rank1_name").text(name);
    $("#rank1_total").text("????????? ????????? ??? ?????? : " + total + "???");
    $("#rank1_today").text("?????? ????????? ????????? ?????? : " + today + "???");
  } else if (ranking === 2) {
    document.getElementById("rank2_img").src = img;
    $("#rank2_name").text(name);
    $("#rank2_total").text("????????? ????????? ??? ?????? : " + total + "???");
    $("#rank2_today").text("?????? ????????? ????????? ?????? : " + today + "???");
  } else if (ranking === 3) {
    document.getElementById("rank3_img").src = img;
    $("#rank3_name").text(name);
    $("#rank3_total").text("????????? ????????? ??? ?????? : " + total + "???");
    $("#rank3_today").text("?????? ????????? ????????? ?????? : " + today + "???");
  } else if (ranking === 4) {
    document.getElementById("rank4_img").src = img;
    $("#rank4_name").text(name);
    $("#rank4_total").text("????????? ????????? ??? ?????? : " + total + "???");
    $("#rank4_today").text("?????? ????????? ????????? ?????? : " + today + "???");
  }
}

function ranking_change(ranking, change) {
  let img = "stu_img" + String(ranking);
  let text = "stu_text" + String(ranking);
  let img_id = document.getElementById(img);
  let text_id = document.getElementById(text);
  if (change > 0) {
    img_id.className = "up_img";
    img_id.src =
      "http://drive.google.com/uc?export=view&id=16q6-jHqmw-L6FTQZZNnZq7xIOS6zhO06";
    text_id.className = "rank_up_text";
    text_id.innerHTML = change;
  } else if (change === 0) {
    img_id.className = "same_img";
    img_id.src =
      "http://drive.google.com/uc?export=view&id=1tLA6sinLl9w7P9P_DqojGUkCsTFeRjqu";
    text_id.innerHTML = "";
  } else {
    img_id.className = "down_img";
    img_id.src =
      "http://drive.google.com/uc?export=view&id=16vzcskud2my5y0bgoijc9oECa4bCRaoU";
    text_id.className = "rank_down_text";
    text_id.innerHTML = -change;
  }
}
function badge_update(date) {
  onLoadBadge("?????????", date); //socket ?????? ??? ?????? $("#my_name").text()
}

$("#fire_btn1").click(function () {
  ranking_update("11-10");
  badge_update("11-10");
  $("#drop_date").text("???????????? : 12??? 10???");
  $("#badge_date").text("21??? 12??? 10??? ?????? ?????? ??????");
});
$("#fire_btn2").click(function () {
  ranking_update("11-11");
  badge_update("11-11");
  $("#drop_date").text("???????????? : 12??? 11???");
  $("#badge_date").text("21??? 12??? 11??? ?????? ?????? ??????");
});
$("#fire_btn3").click(function () {
  ranking_update("11-12");
  badge_update("11-12");
  $("#drop_date").text("???????????? : 12??? 12???");
  $("#badge_date").text("21??? 12??? 12??? ?????? ?????? ??????");
});
$("#fire_btn4").click(function () {
  ranking_update("11-13");
  badge_update("11-13");
  $("#drop_date").text("???????????? : 12??? 13???");
  $("#badge_date").text("21??? 12??? 13??? ?????? ?????? ??????");
});


