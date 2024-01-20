const txt1 = document.getElementById("text1");

const txt2 = document.getElementById("text2");

const btn1 = document.getElementById("btn1");

const out1 = document.getElementById("output1");

const txtout1 = document.getElementById("txtout1");

const txtout2 = document.getElementById("txtout2");

function getDiffAndDisplay() {
    const diff2 = diff_match_patch.prototype.diff_prettyHtml(diff_match_patch.prototype.diff_main(txt1.value, txt2.value));
  
    txtout1.innerText = "First block: " + txt1.value;
    txtout2.innerText = "Second block: " + txt2.value;
    out1.innerHTML = "Diff-match: " + diff2;
  }
    
  
btn1.addEventListener('click', getDiffAndDisplay);