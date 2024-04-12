<p align="center">
  <img style="max-width: 100%;" alt="Welcome to JS Widgets" src="images/projectLogo.png"/>
</p>

# JS Widgets

JS Widgets is a collection of Vectara-powered JavaScript widgets that are ready to be embedded on any HTML page.

> [!TIP]
>
> Looking for something else? Try another open-source project:
>
> - **[React-Search](https://github.com/vectara/react-search)**: Add Vectara semantic search to your React apps with a few lines of code.
> - **[React-Chatbot](https://github.com/vectara/react-chatbot)**: Add a Vectara chatbot widget or chat logic to your React apps with a few lines of code.
> - **[Create-UI](https://github.com/vectara/create-ui)**: The fastest way to generate a working React codebase for a range of generative and semantic search UIs.
> - **[Vectara Answer](https://github.com/vectara/vectara-answer)**: Demo app for Summarized Semantic Search with advanced configuration options.
> - **[Vectara Ingest](https://github.com/vectara/vectara-ingest)**: Sample templates and crawlers for pulling data from many popular data sources.

## Usage

### JS-Search

JS-Search is an embeddable form of our [React-Search](https://github.com/vectara/react-search) component. Try that component's [demo](https://vectara.github.io/react-search/) to see how this widget will appear and behave on your site.

Add this script tag to the `<head>` tag of your website:

```html
<script src="https://cdn.jsdelivr.net/gh/vectara/js-widgets/lib/js-search.js"></script>
```

Place a `div` in the body of your page with an ID assigned to it. The JS-Search script will insert the search widget into this element.

```html
<div id="vectaraSearchElement"></div>
```

Then, at the bottom of your website's `<body>` tag (or in your own JavaScript code), add the following code:

```html
<script>
  window.vectara.renderSearch({
    wrapperId: "vectaraSearchElement", // The ID assigned to the div you made earlier
    customerId: "CUSTOMER_ID",
    corpusId: "CORPUS_ID",
    apiKey: "API_KEY",
    placeholder: "Search", // Optional search input placeholder
    isDeepLinkable: true, // Optional boolean determining if searches will be deeplinked (modifies page URL)
    openResultsInNewTab: true, // Optional boolean determining if links will open in a new tab
  });
</script>
```

### JS-Chatbot

JS-Chatbot is an embeddable form of our [React-Chatbot](https://github.com/vectara/react-chatbot) component. Try that component's [demo](https://vectara.github.io/react-chatbot/) to see how this widget will appear and behave on your site.

Add this script tag to the `<head>` tag of your website:

```html
<script src="https://cdn.jsdelivr.net/gh/vectara/js-widgets/lib/js-chatbot.js"></script>
```

Place a `div` in the body of your page with an ID assigned to it. The JS-Chatbot script will insert the chatbot widget into this element.

```html
<div id="vectaraChatbotElement"></div>
```

Then, at the bottom of your website's `<body>` tag (or in your own JavaScript code), add the following code:

```html
<script>
  window.vectara.renderChatbot({
    wrapperId: "vectaraChatbotElement", // The ID assigned to the div you made earlier
    customerId: "CUSTOMER_ID",
    corpusIds: ["CORPUS_ID_1", "CORPUS_ID_2"]
    apiKey: "API_KEY",
    title: "My chatbot", // Optional title of your chatbot window
    placeholder: "Ask a question", // Optional chatbot window input placeholder
    inputSize: "large", // Optional string specifying the input size ('large' or 'medium')
    emptyStateDisplay: document.getElementById("emptyState"), // Optional HTMLElement to display if the chat window is empty
    isInitiallyOpen: true, // Optional boolean determining if the chatbot window will be open on initial render
    zIndex: 5, // Optional number assigned to the z-index of the chatbot window
  });
</script>
```

### Set up your data

The widgets use the data in your Vectara corpora to provide responses. To set this up:

1. [Create a free Vectara account](https://console.vectara.com/signup).
2. [Create a corpus and add data to it](https://docs.vectara.com/docs/console-ui/creating-a-corpus).
3. [Create a **QueryService** API key](https://docs.vectara.com/docs/console-ui/manage-api-access#create-an-api-key).

**Pro-tip:** After you create an API key, navigate to your corpus and click on the "Access control" tab. Find your API key on the bottom and select the "Copy all" option to copy your customer ID, corpus ID, and API key. This gives you all the data you need to configure your widget.

![Copy all option](images/copyAll.jpg)

## License

Vectara JS Widgets is an open-sourced software licensed under the [Apache 2.0 license](/LICENSE).

_This repository contains sample code that can help you build UIs powered by Vectara, and is licensed under the Apache 2.0 License. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License._
