
    const quiz = [
    {q:"What is JavaScript?",o:["Programming language","Database","OS","Browser"],a:0},
    {q:"Which keyword declares variable?",o:["var","int","define","letvar"],a:0},
    {q:"=== means?",o:["Assignment","Strict equality","Addition","None"],a:1},
    {q:"Function is?",o:["Variable","Block of code","Loop","Object"],a:1},
    {q:"Type of NaN?",o:["Number","String","Undefined","Object"],a:0},
    {q:"let is?",o:["Block scoped","Global","Constant","None"],a:0},
    {q:"const means?",o:["Changeable","Fixed","Loop","Function"],a:1},
    {q:"Array is?",o:["Primitive","Object","Function","Loop"],a:1},
    {q:"typeof null?",o:["null","object","undefined","string"],a:1},
    {q:"JS runs on?",o:["Browser","Server","Both","None"],a:2},

    // {q:"Closure?",o:["Loop","Function+scope","Array","Object"],a:1},
    // {q:"DOM?",o:["Document Object Model","Data Model","Doc Mode","None"],a:0},
    // {q:"Event bubbling?",o:["Upwards","Downwards","None","Loop"],a:0},
    // {q:"this refers?",o:["Window/object","Function","Loop","None"],a:0},
    // {q:"Arrow function?",o:["Short function","Loop","Object","None"],a:0},
    // {q:"Promise?",o:["Async result","Loop","Object","None"],a:0},
    // {q:"setTimeout?",o:["Delay","Loop","Stop","None"],a:0},
    // {q:"JSON?",o:["Data format","Function","Loop","None"],a:0},
    // {q:"parseInt?",o:["Convert int","String","Float","None"],a:0},
    // {q:"map()?",o:["New array","Same","Null","None"],a:0},

    // {q:"forEach?",o:["Nothing","Array","Object","Loop"],a:0},
    // {q:"filter?",o:["Filtered array","Same","Null","None"],a:0},
    // {q:"push?",o:["End","Start","Middle","None"],a:0},
    // {q:"pop?",o:["End","Start","Middle","None"],a:0},
    // {q:"shift?",o:["Start","End","Middle","None"],a:0},
    // {q:"unshift?",o:["Start","End","Middle","None"],a:0},
    // {q:"splice?",o:["Modify array","Loop","Object","None"],a:0},
    // {q:"slice?",o:["Copy","Same","Null","None"],a:0},
    // {q:"== vs ===?",o:["Loose vs strict","Same","None","Loop"],a:0},
    // {q:"Hoisting?",o:["Move up","Loop","None","Error"],a:0},

    // {q:"Scope?",o:["Variable access","Loop","Object","None"],a:0},
    // {q:"Global scope?",o:["Everywhere","Local","None","Loop"],a:0},
    // {q:"Local scope?",o:["Inside block","Global","None","Loop"],a:0},
    // {q:"Event listener?",o:["Handles events","Loop","None","Object"],a:0},
    // {q:"addEventListener?",o:["Attach event","Remove","Loop","None"],a:0},
    // {q:"preventDefault?",o:["Stop default","Loop","None","Object"],a:0},
    // {q:"stopPropagation?",o:["Stop bubbling","Loop","None","Object"],a:0},
    // {q:"fetch()?",o:["API call","Loop","None","Object"],a:0},
    // {q:"async?",o:["Async func","Loop","None","Object"],a:0},
    // {q:"await?",o:["Wait promise","Loop","None","Object"],a:0},

    // {q:"Prototype?",o:["Inheritance","Loop","None","Object"],a:0},
    // {q:"Class?",o:["Blueprint","Loop","None","Object"],a:0},
    // {q:"Constructor?",o:["Init object","Loop","None","Object"],a:0},
    // {q:"super?",o:["Parent call","Loop","None","Object"],a:0},
    // {q:"Spread?",o:["Expand","Loop","None","Object"],a:0},
    // {q:"Rest?",o:["Collect","Loop","None","Object"],a:0},
    // {q:"Template literal?",o:["Backticks","Quotes","None","Loop"],a:0},
    // {q:"Optional chaining?",o:["Safe access","Loop","None","Object"],a:0},
    // {q:"Strict mode?",o:["Safer JS","Loop","None","Object"],a:0},
    // {q:"Recursion?",o:["Function calling itself","Loop","None","Object"],a:0}
];

let i =0, score=0, selected=null;

startBtn.onclick=()=>{
        startBtn.style.display = "none";
    document.getElementById("quiz-box").style.display="block";
    load();
};

    function load(){
        selected = null;
    let q=quiz[i];
    question.innerText=`Q${i + 1}/${quiz.length}: ${q.q}`;
    options.innerHTML="";

  q.o.forEach((opt,idx)=>{
        let b=document.createElement("button");
    b.innerText=opt;
    b.className="option";
    b.onclick=()=>{
        selected = idx;
      document.querySelectorAll(".option").forEach(x=>x.style.background="#f1f1f1");
    b.style.background="lightblue";
    };
    options.appendChild(b);
  });
}

nextBtn.onclick=()=>{
  if(selected===null){alert("Select one!");return;}

    if(selected===quiz[i].a) score++;

    i++;
    if(i<quiz.length) load();
    else end();
};

    function end(){
        document.getElementById("quiz-box").style.display = "none";

  let pass = score>=40;

    result.innerHTML=`
    <div style="
      background:${pass?"#4CAF50":"#e74c3c"};
    color:white;
    padding:20px;
    border-radius:10px;
    animation:pop 0.5s ease;
    ">
    <h2>${pass ? "🎉 PASSED" : "❌ FAILED"}</h2>
    <p>${score}/50</p>
    <button onclick="location.reload()">Restart</button>
</div>
`;
}