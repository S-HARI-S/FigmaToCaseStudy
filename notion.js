const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "secret_otXs4xlErP9gvZl2iAVMj11FjHGJ7M2z6103UhBmqVV" });

(async () => {
  // Assuming you have received the arrays in some way, let's create some sample arrays here.
  const receivedArray1 = ["Content line 1", "Content line 2", "Content line 3"];
  const receivedArray2 = ["https://example.com/cover-image.jpg"];

  // Combine the elements of array1 into a single string to use as content
  const content = receivedArray1.join(' ');

  // Extract the cover image URL from array2
  const coverImageUrl = receivedArray2[0];

  try {
    const response = await notion.pages.create({
      "cover": {
        "type": "external",
        "external": {
          "url": coverImageUrl
        }
      },
      "icon": {
        "type": "emoji",
        "emoji": "🥬"
      },
      "parent": {
        "type": "database_id",
        "database_id": "36492c1fc98f4ef9b406662568fc9d62" // Replace with your Notion database ID
      },
      "properties": {
        "Name": {
          "title": [
            {
              "text": {
                "content": content
              }
            }
          ]
        },
      },
      "children": [
        {
          "object": "block",
          "heading_2": {
            "rich_text": [
              {
                "text": {
                  "content": "Lacinato kale" // Example heading text, you can change this based on your requirements
                }
              }
            ]
          }
        },
        {
          "object": "block",
          "paragraph": {
            "rich_text": [
              {
                "text": {
                  "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                  "link": {
                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale" // Example link URL, you can change this based on your requirements
                  }
                },
                "href": "https://en.wikipedia.org/wiki/Lacinato_kale" // Example link URL, you can change this based on your requirements
              }
            ],
            "color": "default"
          }
        }
      ]
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
