const completeStructure= [
    {
      name: "Folder1",
      id: 123,
      path: [0],
      isFolder: true,
      isActive: false,
      content: "",
      childNodes: [
        {
          name: "Sub1",
          id: 234,
          path: [0,0],
          isFolder: true,
          isActive: false,
          content: "",
          childNodes: []
        },
        {
          name: "File1",
          id: 2777,
          path: [0,1],
          isFolder: false,
          isActive: false,
          content: "lalalala",
          childNodes: []
        },
      ]
    },
    {
      name: "Folder2",
      id: 3434,
      path: [1],
      isFolder: true,
      isActive: false,
      content: "",
      childNodes: [
        {
          name: "Sub3",
          id: 344,
          path: [1,0],
          isFolder: true,
          isActive: false,
          content: "",
          childNodes: [
            {
              name: "Sub-Sub1",
              id: 443,
              path: [1,0,0],
              isFolder: true,
              isActive: false,
              content: "",
              childNodes: []
            },
            {
              name: "Sub-Sub2",
              id: 342,
              path: [1,0,1],
              isFolder: true,
              isActive: false,
              content: "",
              childNodes: []
            },
            {
              name: "File-file",
              id: 3752,
              path: [1,0,2],
              isFolder: false,
              isActive: false,
              content: "ddddddddddsdsds",
              childNodes: []
            },
          ]
        },
      ]
    }
];


export default completeStructure;