export var MenuConfig = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {
            name: 'Broccoli',
            children: [
              {
                name: 'Food',
              },
              {
                name: 'Dessert',
                children: [
                  {
                    name: 'Brussels sprouts',
                    children: [
                      {
                        name: 'Broccoli',
                        children: [
                          {
                            name: 'Food',
                          },
                          {
                            name: 'Dessert',
                            children: [
                              {
                                name: 'Brussels sprouts',
                                children: [
                                  {
                                    name: 'Broccoli',
                                    children: [
                                      {
                                        name: 'Food',
                                        children: [
                                          {
                                            name: 'Brussels sprouts',
                                            children: [
                                              {
                                                name: 'Broccoli',
                                                children: [
                                                  {
                                                    name: 'Food',
                                                  },
                                                  {
                                                    name: 'Dessert'
                                                  }
                                                ]
                                              },
                                              {name: 'Brussels sprouts'},
                                            ]
                                          }
                                        ]
                                      },
                                      {
                                        name: 'Dessert'
                                      }
                                    ]
                                  },
                                  {name: 'Brussels sprouts'},
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {name: 'Brussels sprouts'},
                    ]
                  }
                ]
              }
            ]
          },
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
  {
    name: 'Junk Food'
  }
];

export interface Menu{
  name: string;
  children: Array<Menu>;
}
