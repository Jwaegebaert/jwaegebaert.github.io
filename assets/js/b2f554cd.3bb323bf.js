"use strict";(self.webpackChunkjwaegebaert=self.webpackChunkjwaegebaert||[]).push([[477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"style-command-bar-with-formatting-magic","metadata":{"permalink":"/blog/style-command-bar-with-formatting-magic","source":"@site/blog/2022-05-02-style-command-bar-with-formatting-magic/2022-08-20-style-command-bar-with-formatting-magic.md","title":"Style your command bar with formatting magic","description":"SharePoint changing the command bar with view formatting","date":"2022-05-01T10:00:00.000Z","formattedDate":"May 1, 2022","tags":[{"label":"SharePoint","permalink":"/blog/tags/share-point"},{"label":"List formatting","permalink":"/blog/tags/list-formatting"}],"readingTime":5.01,"hasTruncateMarker":true,"authors":[{"name":"Jasey Waegebaert","title":"Microsoft 365 Consultant","url":"https://github.com/jwaegebaert","imageURL":"https://github.com/jwaegebaert.png","key":"jwaegebaert"}],"frontMatter":{"slug":"style-command-bar-with-formatting-magic","title":"Style your command bar with formatting magic","description":"SharePoint changing the command bar with view formatting","date":"2022-05-01T10:00","authors":"jwaegebaert","image":"./preview.png","tags":["SharePoint","List formatting"]}},"content":"A little background story about this article. For a customer, I was working on a `ListView Command Set` extension. Then came the question of whether the action button could be the first button and if we could remove a whole bunch of buttons out of the command bar. This is where I then started brainstorming different approaches.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## The original approaches\\r\\n\\r\\n### Using CSS\\r\\n\\r\\nThe way I usually apply this is to implement some CSS logic. Here you can already start applying a lot of logic within the command bar but you also run into a whole bunch of limitations. Within SPFx, I personally use Sass. This makes it a bit easier to write CSS but that aside. \\r\\n\\r\\n```css \\r\\n:global {\\r\\n  button[name=\'Upload\'], \\r\\n  button[name=\'Share\'] {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\nIf we look at the example above, you can see that I start with a global operator. After this, we check each button available and look at the name attribute to see if it is the same value as our variable. If this is the case we will simply remove this from our display.\\r\\n\\r\\n![htmlButtonAttribute](./htmlButtonAttribute.png)\\r\\n\\r\\nThis is easy to use for basic scenarios. To adjust some styling slightly or to hide the button. But you can hear it coming. There are a number of problems associated with this. Should Microsoft suddenly decide to remove all name attributes within buttons you may start updating your code again to accommodate this change. With this, it is not recommended that you go through CSS styling to override components that you don\'t own yourself.\\r\\n\\r\\nNow if your site suddenly appears in a **different language** the names are no longer correct and the buttons are visible again. You can start catching all these variants but then you\'re going to have to apply a lot of extra logic.\\r\\n\\r\\nThese are a few scenarios where things can go wrong but in summary, CSS is easy to quickly add styling to a button but can\'t add much value for the rest.\\r\\n\\r\\n### Using JavaScript or jQuery\\r\\n\\r\\nThis will give you more ability to start editing your DOM. With this, you will be able to apply more elaborate scenarios such as moving a button or making adjustments to the parent of the button. But this runs into the same problem as the CSS approach. Take a look at the code below. \\r\\n\\r\\n``` javascript \\r\\nlet uploadbutton = document.getElementsByName(\\"Upload\\")[0] || document.documentElement;  \\r\\nuploadbutton.style.display = \\"none\\";  \\r\\n```\\r\\n\\r\\nAs you\'ll see in this snippet, we\'re using the name attribute again. This, in turn, causes us to modify elements that are not anticipated to be modified. \\r\\n\\r\\n## View formatting magic\\r\\n\\r\\nNow we get to the juicy content. `View formatting` magic. Through view formatting, we have recently been given the ability to start adjusting a whole bunch of variables in the command bar. I discovered this myself when I went to check out some of [Chris Kent\'s](https://github.com/thechriskent) new list formatting samples. Here he had created a sample in which the Automate button was removed when a list item was selected. \\r\\n \\r\\nWith this new knowledge, I started testing the possibilities and a lot of new use cases became possible. For example, take a look at the following JSON.\\r\\n\\r\\n``` json\\r\\n{\\r\\n  \\"commandBarProps\\": {\\r\\n    \\"commands\\": [\\r\\n      {\\r\\n        \\"key\\": \\"upload\\",\\r\\n        \\"primary\\": true\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"newFolder\\",\\r\\n        \\"text\\": \\"Create new folder\\",\\r\\n        \\"iconName\\": \\"FabricNewFolder\\",\\r\\n        \\"selectionModes\\": [\\r\\n          \\"NoSelection\\"\\r\\n        ],\\r\\n        \\"position\\": 1\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"new\\",\\r\\n        \\"hide\\": true\\r\\n      }\\r\\n    ]\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\nHere you will notice a lot of new information but it\'s pretty straightforward. Within view formatting, we have now been given the ability to start customizing the `commandBarProps`. Here you start by selecting a key. This then refers to one of the action buttons you want to change the properties of. \\r\\n\\r\\n> To make a quick comparison with the other approaches we discussed. If your site suddenly changes to another language, this key will still relate to the correct button.\\r\\nIn the JSON segment above, we have done the following:\\r\\n\\r\\n- Change the upload button styling to the primary style.\\r\\n- Modified the name of the new folder button to `Create new folder`. We change the icon into `FabricNewFolder`. Then we make sure that this button is only available if no item is selected. Finally, we make sure that it is first in the row.\\r\\n- Hide the new button.\\r\\n\\r\\nBy applying this JSON sample, we get the following result.\\r\\n\\r\\n### Without the view formatting sample\\r\\n\\r\\n![noViewFormatting](./noViewFormatting.png)\\r\\n\\r\\n### With the view formatting sample\\r\\n\\r\\n![viewFormatting](./viewFormatting.png)\\r\\n\\r\\n## View formatting with a custom extension\\r\\n\\r\\nThis is where the power of view formatting comes full circle. With the position parameter we can now make sure that our custom extension will be placed at a certain spot within the command bar. This is where I do need to touch on this, it is not possible (or at least not directly that I know of) to use view formatting to start modifying your custom extension. What we can do is change the actions around the custom extension so that it can get more attention.\\r\\n\\r\\nNow if we apply this in practice we get the following.\\r\\n\\r\\n``` json\\r\\n{\\r\\n  \\"commandBarProps\\": {    \\r\\n    \\"commands\\": [\\r\\n      {\\r\\n        \\"key\\": \\"share\\",\\r\\n        \\"position\\": 1\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"automate\\",\\r\\n        \\"position\\": 2\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"integrate\\",\\r\\n        \\"position\\": 3\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"export\\",\\r\\n        \\"position\\": 4\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"new\\",\\r\\n        \\"hide\\": true\\r\\n      },\\r\\n      {\\r\\n        \\"key\\": \\"editInGridView\\",\\r\\n        \\"hide\\": true\\r\\n      }\\r\\n    ]\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\nHere we hide some elements and move a few. if we then apply this JSON sample we get following result. Note here that the custom extension I use is named `Advanced filters`.\\r\\n\\r\\n![formattingWithExtension](./formattingWithExtension.png)\\r\\n\\r\\n## Some concluding words\\r\\n\\r\\nFor myself, this opens a lot of new doors with possibilities towards the formatting world. This is itself a useful technique to know exists. There are a whole bunch of scenarios where it can be useful to start redesigning the default command bar. Hopefully this information will help you too!\\r\\n\\r\\n## Resources\\r\\n\\r\\nSome useful additional resources:\\r\\n\\r\\n- [Use view formatting to customize SharePoint](https://docs.microsoft.com/sharepoint/dev/declarative-customization/view-formatting)\\r\\n- [Command bar customization syntax reference](https://docs.microsoft.com/sharepoint/dev/declarative-customization/view-commandbar-formatting)"}]}')}}]);