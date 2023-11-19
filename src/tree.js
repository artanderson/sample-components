export const tree = [
  {
    name: "One",
    children: [
      {
        name: "one.a",
        content: "my content 1 a"
      },
      {
        name: "one.b",
        children: [
          {
            name: "one.b.1",
            content: "my child content 1 b 1"
          },
          {
            name: "one.b.2",
            content: "my child content 1 b 2",
            children: [
              {
                name: "one.b.2.a",
                content: "my childs child content 1 b 2 a"
              },
              {
                name: "one.b.2.b",
                content: "my childs child content 1 b 2 b"
              },
              {
                name: "one.b.2.c",
                content: "my childs child content 1 b 2 c"
              }
            ]
          }
        ]
      },
      {
        name: "one.c",
        content: "my content 1 c",
        children: [
          {
            name: "one.c.1",
            content: "my child content 1 c 1"
          },
          {
            name: "one.c.2",
            content: "my child content 1 c 2"
          }
          ,
          {
            name: "one.c.3",
            content: "my child content 1 c 3"
          }
        ]
      }
    ]
  },
  {
    name: "Two",
    children: [
      {
        name: "two.a",
        content: "my content 2 a",
        children: [
          {
            name: "two.a.1",
            content: "my child content 2 a 1"
          },
          {
            name: "two.a.2",
            content: "my child content 2 a 2",
            children: [
              {
                name: "two.a.2.a",
                content: "my childs child content 2 a 2 a",
                children: [
                  {
                    name: "two.a.2.a.1",
                    content: "my childs childs child content 2 a 2 a 1"
                  },
                  {
                    name: "two.a.2.a.2",
                    content: "my childs childs child content 2 a 2 a 2"
                  },
                  {
                    name: "two.a.2.a.3",
                    content: "my childs childs child content 2 a 2 a 3"
                  },
                  {
                    name: "two.a.2.a.4",
                    content: "my childs childs child content 2 a 2 a 4"
                  },
                  {
                    name: "two.a.2.a.5",
                    content: "my childs childs child content 2 a 2 a 5"
                  },
                ]
              },
              {
                name: "two.a.2.b",
                content: "my childs child content 2 a 2 b"
              },
            ]
          },
          {
            name: "two.a.3",
            content: "my child content 2 a 3"
          }
        ]
      },
      {
        name: "two.b",
        content: "my content 2 b",
        children: [
          {
            name: "two.b.1",
            content: "my child content 2 b 1",
            children: [
              {
                name: "two.b.1.a",
                content: "my childs child content 2 b 1 a"
              },
              {
                name: "two.b.1.b",
                content: "my childs child content 2 b 1 b"
              },
            ]
          },
          {
            name: "two.b.2",
            content: "my child content 2 b 2"
          },
        ]
      },
      {
        name: "two.c",
        content: "my content 2 c"
      }
    ]
  },
  {
    name: "Three",
    children: [
      {
        name: "three.a",
        content: "my content 3 a"
      },
      {
        name: "three.b",
        children: [
          {
            name: "three.b.1",
            content: "my child content 3 b 1"
          },
          {
            name: "three.b.2",
            content: "my child content 3 b 2"
          },
        ]
      },
      {
        name: "three.c",
        content: "my content 3 c",
        children: [
          {
            name: "three.c.1",
            content: "my child content 3 c 1"
          },
          {
            name: "three.c.2",
            content: "my child content 3 c 2",
            children: [
              {
                name: "three.c.2.a",
                content: "my childs child content 3 c 2 a",
                children: [
                  {
                    name: "three.c.2.a.1",
                    content: "my childs childs child content 3 c 2 a 1"
                  },
                  {
                    name: "three.c.2.a.2",
                    content: "my childs childs child content 3 c 2 a 2"
                  },
                ]
              },
              {
                name: "three.c.2.b",
                content: "my childs child content 3 c 2 b"
              },
            ]
          },
          {
            name: "three.c.3",
            content: "my child content 3 c 3"
          }
        ]
      }
    ]
  },
  {
    name: "Four",
    children: [
      {
        name: "four.a",
        content: "my content 4 a"
      },
      {
        name: "four.b",
        children: [
          {
            name: "four.b.1",
            content: "my child content 4 b 1"
          },
          {
            name: "four.b.2",
            content: "my child content 4 b 2"
          },
        ]
      },
      {
        name: "four.c",
        content: "my content 4 c"
      }
    ]
  },
]