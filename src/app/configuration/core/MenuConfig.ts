export var MenuConfig: Array<Menu> = [
  {
    name: 'Accounts',
    link_segment: 'accounts',
    show_children: true,
    hidden: false,
    children: [
      {
        name: 'Dashboard',
        link_segment: 'accounts/dashboard',
        show_children: true,
        hidden: false
      },
      {
        name: 'Reports',
        link_segment: 'accounts/reports',
        show_children: true,
        hidden: false
      },
      {
        name: 'Create Account',
        link_segment: 'accounts/create',
        show_children: true,
        hidden: false
      }
    ]
  },
  {
    name: 'Activities',
    link_segment: 'activities',
    show_children: true,
    hidden: false
  },
  {
    name: 'Contacts',
    link_segment: 'contacts',
    show_children: true,
    hidden: false
  }
];

export interface Menu{
  name: string;
  link_segment: string;
  show_children?: boolean;
  hidden: boolean;
  children?: Array<Menu>;
}
