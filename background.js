// chrome.declarativeNetRequest.updateDynamicRules(
//     {
//         addRules: [
//             {
//                 id: "block_google_analytics",
//                 priority: 1,
//                 action: {
//                     type: "redirect",
//                     redirect: {
//                         regexSubstitution: "https://www.youtube.com/watch?v=$1",
//                     }
//                 },
//                 condition: {
//                     regexFilter: "https://www.youtube.com/shorts/(.*)",
//                 }
//             }
//         ]
//     }, () => {}
// );