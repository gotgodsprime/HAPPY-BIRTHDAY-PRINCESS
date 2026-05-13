function start(){
  document.getElementById("intro").style.display="none";
  document.getElementById("app").style.display="block";

  document.getElementById("music").play();

  observeScenes();
}

/* 🎬 scroll animation engine */
function observeScenes(){
  const scenes = document.querySelectorAll(".scene");

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  }, { threshold:0.6 });

  scenes.forEach(s=>observer.observe(s));
}

/* 💖 floating hearts */
setInterval(()=>{
  let h=document.createElement("div");
  h.innerHTML="💖";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.top="100vh";
  h.style.fontSize="18px";
  h.style.opacity="0.6";
  h.style.animation="float 6s linear";
  document.body.appendChild(h);

  setTimeout(()=>h.remove(),6000);
},400);
