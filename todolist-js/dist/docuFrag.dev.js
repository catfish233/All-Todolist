"use strict";

function load() {
  var collection = localStorage.getItem("localdata");

  if (collection != null) {
    var data = JSON.parse(collection);
    var todoCount = 0;
    var doneCount = 0;
    var todoString = "";
    var doneString = ""; //初始化计数值和列表

    for (var i = 0; i < data.length; i++) {
      if (data[i].status) {
        doneString += "<li><input type='checkbox' onchange='upDate(" + i + ",false)' checked='checked' />" + "<p id='p-" + i + "' onclick='edit(" + i + ")' >" + data[i].text + "</p>" + //点击文本，转到编辑函数
        "<a href='javascript:del(" + i + ")'>-</a></li>"; //点击del按钮，跳转到删除函数

        doneCount++;
      } else {
        todoString += "<li><input type='checkbox' onchange='upDate(" + i + ",true)' />" + "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].text + "</p>" + "<a href='javascript:del(" + i + ")'>-</a></li>";
        todoCount++;
      }
    }

    ;
    var fragment = document.createDocumentFragment();
    todocount.innerHTML = todoCount;
    todolist.innerHTML = todoString;
    donecount.innerHTML = doneCount;
    donelist.innerHTML = doneString; // fragment.appendChild(todocount);//要求参数是元素节点
    // fragment.appendChild(todolist);

    fragment.appendChild(donecount);
    fragment.appendChild(donelist);
    var Todolist = document.querySelector(".TodoList");
    Todolist.appendChild(fragment);
  } else {
    todocount.innerHTML = 0;
    todolist.innerHTML = "";
    donecount.innerHTML = 0;
    donelist.innerHTML = "";
  }

  saveSort();
}