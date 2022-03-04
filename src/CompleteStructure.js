const completeStructure= [
    {
      name: "Harry",
      id: 123,
      path: [0],
      isFolder: true,
      isActive: false,
      content: "",
      childNodes: [
        {
          name: "Hedwig",
          id: 234,
          path: [0,0],
          isFolder: true,
          isActive: false,
          content: "",
          childNodes: []
        },
        {
          name: "Marauders Map",
          id: 2777,
          path: [0,1],
          isFolder: false,
          isActive: false,
          content: "Moony, Wormtail, Padfoot and Prongs",
          childNodes: []
        },
      ]
    },
    {
      name: "Hermione",
      id: 3434,
      path: [1],
      isFolder: true,
      isActive: false,
      content: "",
      childNodes: [
        {
          name: "Ron",
          id: 344,
          path: [1,0],
          isFolder: true,
          isActive: false,
          content: "",
          childNodes: [
            {
              name: "Scabbers",
              id: 443,
              path: [1,0,0],
              isFolder: true,
              isActive: false,
              content: "",
              childNodes: []
            },
            {
              name: "Pure-Blood",
              id: 342,
              path: [1,0,1],
              isFolder: true,
              isActive: false,
              content: "",
              childNodes: []
            },
            {
              name: "Quidditch",
              id: 3752,
              path: [1,0,2],
              isFolder: false,
              isActive: false,
              content: "How to be a part of Quidditch Team at Hogwarts?",
              childNodes: []
            },
          ]
        },
      ]
    }
];


export default completeStructure;