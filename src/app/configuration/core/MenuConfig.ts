export var MenuConfig: Array<Menu> = [
  {
    id: 1,
    name: 'Accounts',
    link_segment: 'accounts',
    icon: 'search',
    root: true,
    hidden: false,
    children: [
      {
        id: 2,
        name: 'Dashboard',
        link_segment: 'accounts/dashboard',
        icon: 'home',
        root: true,
        hidden: false,
        children: [
          {
            id: 4,
            name: 'Create Account',
            link_segment: 'accounts/create',
            icon: 'favorite_border',
            root: false,
            hidden: false
          }
        ]
      },
      {
        id: 3,
        name: 'Reports',
        link_segment: 'accounts/reports',
        icon: 'settings',
        root: false,
        hidden: false
      }
    ]
  },
  {
    id: 5,
    name: 'Activities',
    link_segment: 'activities',
    icon: 'fingerprint',
    root: false,
    hidden: false,
    children: [
      {
        id: 7,
        name: 'Create Activitiy',
        link_segment: 'activities/create',
        icon: '',
        root: false,
        hidden: false
      }
    ]
  },
  {
    id: 6,
    name: 'Contacts',
    link_segment: 'contacts',
    icon: 'dashboard',
    root: false,
    hidden: false
  }
];

/*export const MenuConfig: Menu[] = [
  {
    id: 1,
    name: "Section1"
  },
  {
    id: 2,
    name: "Section2",
    children: [
      {
        id: 3,
        name: "Section2-1"
      },
      {
        id: 4,
        name: "Section2-2"
      },
      {
        id: 5,
        name: "Section2-3"
      }
    ]
  },
  {
    id: 6,
    name: "Section3",
    children: [
      { id: 7,
        name: "Section3-1"
      },
      {
        id: 8,
        name: "Section3-2",
        children: [
          {
            id: 9,
            name: "Section3-2-1"
          },
          {
            id: 10,
            name: "Section3-2-2"
          },
          {
            id: 11,
            name: "Section3-2-3",
            children: [
              {
                id: 12,
                name: "Section3-2-3-1"
              },
              {
                id: 13,
                name: "Section3-2-3-2"
              }
            ]
          },
          {
            id: 11,
            name: "Section3-2-4",
          }
        ]
      },
      {
        id: 14,
        name: "Section3-3",
        children: [
          {
            id: 15,
            name: "Section3-3-1"
          },
          {
            id: 16,
            name: "Section3-3-2"
          }
        ]
      }
    ]
  }
];*/

export interface Menu{
  id: number;
  name: string;
  link_segment: string;
  icon?: string;
  root: boolean;
  hidden?: boolean;
  children?: Array<Menu>;
}

