chrome.runtime.onMessage.addListener(function(alert,sender,sendResponse){console.table(alert)});

chrome.contextMenus.create({
    title: "Selectize", 
    id: "parent",
    contexts:["page"],
  });

  chrome.contextMenus.create({
    title: "Save Content",
    id: "content",
    contexts:["selection"]
  });
  
  chrome.contextMenus.create({
    title: "Gallery",
    parentId: "parent",
    id: "video",
    contexts:["page"],
  });
  chrome.contextMenus.create({
    title: "Gallery",
    id: "video2",
    contexts:["selection"],
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (tab) {
      if (info.menuItemId === "content"){
        chrome.tabs.sendMessage(tab.id, {method: 'getSelection'}, response => {
          console.log(response.data);
        });
      }
      if (info.menuItemId === "video" || info.menuItemId === "video2"){
        chrome.tabs.sendMessage(tab.id, {method: 'getCopied'}, response => {
          // console.log(response.data);
        });
      }
    }
  });
//   chrome.contextMenus.onClicked.addListener(function(info, tab){
//     console.log(info.selectionText);
//     console.log(tab);
//     chrome.tabs.sendMessage(tab.id, info.selectionText);
//   })