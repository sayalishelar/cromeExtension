chrome.runtime.onMessage.addListener(function(alert,sender,sendResponse){console.table(alert)});
function getword(info,tab) {
    // console.log("Word " + info.selectionText + " was clicked.");
    // chrome.tabs.create({  
    //   url: "http://www.google.com/search?q=" + info.selectionText
    // });
    // chrome.runtime.onMessage.addListener((message, sender) => {
    //     const { type, url } = message;
    //     const tabId = sender.tab.id;
      
        
    // chrome.tabs.sendMessage(tab.id, {color: "#00FF00"}, function(response) {
    //     console.log(response);
    // });
    //   });
  }

chrome.contextMenus.create({
    title: "Selectize", 
    contexts:["selection"], 
    onclick: getword
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab.id, {method: 'getSelection'}, response => {
      console.log(response.data);
    });
  });
//   chrome.contextMenus.onClicked.addListener(function(info, tab){
//     console.log(info.selectionText);
//     console.log(tab);
//     chrome.tabs.sendMessage(tab.id, info.selectionText);
//   })