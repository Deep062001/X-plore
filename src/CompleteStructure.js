const completeStructure= [
    {
      name: "Folder1",
      id: 123,
      path: [0],
      childNodes: [
        {
          name: "Sub1",
          id: 234,
          path: [0,0],
          childNodes: []
        },
      ]
    },
    {
      name: "Folder2",
      id: 3434,
      path: [1],
      childNodes: [
        {
          name: "Sub3",
          id: 344,
          path: [1,0],
          childNodes: [
            {
              name: "Sub-Sub1",
              id: 443,
              path: [1,0,0],
              childNodes: []
            },
            {
              name: "Sub-Sub2",
              id: 344,
              path: [1,0,1],
              childNodes: []
            },
          ]
        },
      ]
    }
];


export default completeStructure;