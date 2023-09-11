import "./style.css"
const app = document.querySelector<HTMLDivElement>("#app")

type boxProps = {
  element: any
  attr?: any
  children?: any
}

const Box = (props: boxProps) => {
  const el = document.createElement(props.element)
  if (props.attr) {
    Object.keys(props.attr).forEach((key: string) => {
      el[key] = props.attr[key]
    })
  }

  if (!Array.isArray(props.children)) el.append(props.children)
  else el.append(...props.children)
  return el
}
app?.append(Box({
  element: "form",
  attr: {
    className: "w-1/3 border-solid border-2 border-purple-500 mt-20 p-8 rounded-2xl m-auto"
  },
  children: [Box({
    element: "img",
    attr: {
      className: "w-[100px] h-[100px] rounded-full mx-auto border-solid border-4 border-purple-500",
      src: "./src/profile-image.jpg"
    }
  }),
  Box({
    element: "div",
    attr: {
      className: "mt-10  w-full m-auto"
    },
    children: [Box({
      element: "label",
      attr: {
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        for: "user-phone"
      },
      children: "Name"

    }),
    Box({
      element: "input",
      attr: {
        className: "shadow-slate-800 bg-purple-100 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-500 dark:border-purple-600 dark:placeholder-gray-200 placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 shadow-sm",
        placeholder: "Enter your name",
        id: "user-name",


      },

    })]
  }), Box({
    element: "div",
    attr: {
      className: "mt-10  w-full m-auto"
    },
    children: [Box({
      element: "label",
      attr: {
        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        for: "user-phone"
      },
      children: "Phone Number"

    }),
    Box({
      element: "input",
      attr: {
        className: "shadow-slate-800 bg-purple-100 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-purple-500 dark:border-purple-600 dark:placeholder-gray-200 placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 shadow-sm",
        placeholder: "Enter your phone number",
        id: "user-phone",
        type: "string"
      }

    })]

  }), Box({
    element: "div",
    attr: {
      className: "flex w-full justify-between mt-16 m-auto"
    },
    children: [Box({
      element: "div",
      attr: {
        className: "flex items-center mr-4"
      },
      children: [Box({
        element: "label",
        attr: {
          className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
          for: "user-SIM"
        },
        children: "SIM"

      }),
      Box({
        element: "input",
        attr: {
          className: "w-4 h-4 text-purple-600 bg-purple-100 accent-purple-500 border-gray-300 dark:bg-gray-700 dark:border-gray-600",
          id: "user-SIM",
          type: "radio",
          value: "SIM",
          name: "inline-radio-group"
        }

      })]

    }), Box({
      element: "div",
      attr: {
        className: "flex items-center mr-4"
      },
      children: [Box({
        element: "label",
        attr: {
          className: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300",
          for: "user-device"
        },
        children: "Device"

      }),
      Box({
        element: "input",
        attr: {
          className: "w-4 h-4 text-purple-600 bg-purple-100 border-gray-300 accent-purple-500 dark:bg-gray-700 dark:border-gray-600",
          id: "user-device",
          type: "radio",
          value: "Device",
          name: "inline-radio-group"
        }

      })]

    })]
  }), Box({
    element: "div",
    attr: {
      className: "flex mt-12 w-full"
    },
    children: [Box({
      element: "div",
      attr: {
        className: "flex mb-6 w-1/2 justify-start"
      },
      children: Box({
        element: "button",
        attr: {
          className: "dark:shadow-lg shadow-md shadow-slate-800 text-white shadow-xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-500 focus:outline-none dark:focus:ring-purple-800 focus:shadow-none",
          id: "submit-button",
          type: "button",
        },
        children: "Show User"

      })
    }), Box({
      element: "div",
      attr: {
        className: "flex mb-6 w-1/2 justify-end"
      },
      children: Box({
        element: "button",
        attr: {
          className: "dark:shadow-lg shadow-md shadow-slate-800 text-white shadow-xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-500 focus:outline-none dark:focus:ring-purple-800 focus:shadow-none",
          id: "show-button",
          type: "button",
        },
        children: "Show drawer"
      })
    })]
  })]
}))
app?.append(Box({
  element: "div",
  attr: {
    id: "contact-list-drawer",
    className: "fixed bottom-[-140px] left-0 right-0 z-40 w-full p-4 overflow-y-scroll h-[140px]  duration-700 bg-gray-200 dark:bg-gray-800 transform-none border-solid border-2 border-purple-600",
    tabindex: "-1"
    },
  children: [Box({
    element: "h5",
    attr: {
      id: "drawer-bottom-label",
      className: "inline-flex items-center mb-4 text-base font-semibold text-purple-700 dark:text-gray-400"
    },
    children: "User info"
  }),Box({
    element: "button",
    attr: {
      id:"close-button",
      type:"button",
      className:"text-purple-700 bg-transparent hover:bg-purple-400 hover:text-purple-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-purple-600 dark:hover:text-white"
    },
    children: Box({
      element:"img",
      attr:{
        className:"w-5 h-5",
        src : "./src/close.png"
      }
    })
  }),Box({
    element:"ul",
    attr:{
      className:"flex flex-col list-none w-full self-center items-center",
      id:"contact-list"
    },
    children:""
  })]
}))


type userProps = {
  id : string
  contactName : string
  phoneNumber : string | number
  storage : "SIM" | "Device"
}
type contactListType = userProps[]
const contactList : contactListType = []




const userName = document.querySelector<HTMLInputElement>("#user-name")
const userPhone = document.querySelector<HTMLInputElement>("#user-phone")
const userStorage = document.querySelector<HTMLInputElement>("#user-storage")
const addContactBtn = document.querySelector<HTMLButtonElement>("#submit-button")
const closeContactBtn = document.querySelector<HTMLButtonElement>("#close-button")
const showContactBtn = document.querySelector<HTMLButtonElement>("#show-button")
const showDrawer = document.querySelector<HTMLDivElement>("#contact-list-drawer")
const contactListElement = document.querySelector<HTMLUListElement>("#contact-list")



// add new user
addContactBtn?.addEventListener("click" ,(event: any) => {
  event?.preventDefault()
  const newContact: userProps = {
      id: crypto.randomUUID(),
      contactName: userName?.value ?? "",
      phoneNumber: userPhone?.value ?? "",
      storage: userStorage?.checked ? "SIM" : "Device"
  }
  if (newContact.contactName, newContact.phoneNumber) {
      contactList.push(newContact)

      const listItem = document.createElement("li")
      listItem.className = "px-4 py-2 bg-purple-300 w-1/3 mb-4 rounded-lg"
      const contactNameElement = document.createElement("h1")
      contactNameElement.className = "text-gray-900 font-medium text-center"
      contactNameElement.innerText = newContact.contactName
      const contactPhoneElement = document.createElement("h4")
      contactPhoneElement.className = "text-gray-700 text-center"
      contactPhoneElement.innerText = newContact.phoneNumber.toString()
      listItem.appendChild(contactNameElement)
      listItem.appendChild(contactPhoneElement)
      contactListElement?.appendChild(listItem)
      alert("contact has been added succesfully!")
  }
  else alert("please fill inputes then try again!")
})

// show drawer that contains users
showContactBtn?.addEventListener("click" , () => {
  showDrawer?.classList.remove("bottom-[-140px]")
  showDrawer?.classList.add("bottom-0")
})

// closes drawer
closeContactBtn?.addEventListener("click" ,() => {
  showDrawer?.classList.remove("bottom-[0]")
  showDrawer?.classList.add("bottom-[-140px]")
})