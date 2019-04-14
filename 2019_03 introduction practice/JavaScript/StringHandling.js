// alert('(✿✪‿✪｡)ﾉｺﾝﾁｬ♡');
// const a = 10;
// const b = 20;
// const sum = a + b;
// console.log(sum);
// console.log('(✿✪‿✪｡)ﾉｺﾝﾁｬ♡', '現在', new Date(), 'だよねー。');
// console.log(2 ** 4);
// let myFunction = () => console.log('es una function');
// myFunction();

//without the 'onload' the 'querySelector' is returning 'null' because it executes before the DOM fully loads
window.onload = function() {
  searchFromPrefectureList();
  countInsertedString();

  function countInsertedString() {
    const textarea = document.querySelector(".textarea");
    const string_num = document.querySelector(".string_num");

    textarea.addEventListener("keyup", onKeyUp);

    function onKeyUp() {
      const inputText = textarea.value;
      string_num.innerText = inputText.length;
    }
  }

  function searchFromPrefectureList() {
    const searchWordText = document.querySelector("#search-word-input");
    const prefectureList = document.querySelectorAll("#prefecture-list button");

    searchWordText.addEventListener("keyup", () => {
      const searchWord = searchWordText.value;

      prefectureList.forEach(element => {
        if (searchWord == false || searchWord === "") {
          element.classList.remove("hide");
          return;
        }
        //setHideClassIntoElement(searchWord, element);
        const prefectureName = element.dataset.name;
        const phonetic = element.dataset.phonetic;

        if (
          searchWord.charAt(0) === prefectureName.charAt(0) ||
          searchWord.charAt(0) === phonetic.charAt(0)
        ) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      });
    });
  }

  function setHideClassIntoElement(searchWord, element) {
    const prefectureName = element.dataset.name;
    const phonetic = element.dataset.phonetic;

    if (
      searchWord.charAt(0) === prefectureName.charAt(0) ||
      searchWord.charAt(0) === phonetic.charAt(0)
    ) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  }
};
