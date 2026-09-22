export const navigation = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
  {
    label: "Services",
    path: "/services/advanced-fetal-scans",

    children: [
      {
        label: "Advanced Fetal Scans",
        path: "/services/advanced-fetal-scans",
      },

      {
        label: "Screening & Diagnostics",
        path: "/services/screening-diagnostics",
      },

      {
        label: "Specialized Care & Procedures",
        path: "/services/specialized-care-procedures",
      },
    ],
  },
  // { label: "Services", path: "/services" },
  //  {
  //   label: "Services",
  //   path: "/services",
  //   children: [
  //     {
  //       label: "Fetal Services",
  //       path: "/services/fetal-services",
  //       children: [
  //         {
  //           label: "Fetal Scans",
  //           path: "/services/fetal-scans",
  //         },
  //         {
  //           label: "Fetal Procedures",
  //           path: "/services/fetal-procedures",
  //         },
  //       ],
  //     },
  //   ],
  // },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
]

export const footerQuickLinks = navigation

export const footerServiceLinks = [
  {
    label: "Advanced Fetal Scans",
    path: "/services/advanced-fetal-scans",
  },
  {
    label: "Screening & Diagnostics",
    path: "/services/screening-diagnostics",
  },
  {
    label: "Specialized Care & Procedures",
    path: "/services/specialized-care-procedures",
  },
];
// export const footerServiceLinks = [
//   {
//     label: "Advanced Fetal Scans",
//     path: "/services/fetal-scans",
//   },
//   {
//     label: "Screening & Diagnostics",
//     path: "/services",
//   },
//   {
//     label: "High Risk Pregnancy Care",
//     path: "/services",
//   },
//   {
//     label: "Fetal Therapy Procedures",
//     path: "/services/fetal-procedures",
//   },
// ];

