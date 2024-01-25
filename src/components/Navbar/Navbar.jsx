import React from 'react'
import NavbarListButton from './NavbarListButton.jsx'

const Navbar = () => {
  return (
<div class="bg-blue-400 flex flex-col p-10 gap-5 h-full">


    <div className="flex flex-col justify-start	items-start">
        <a>
    <button>Marketing</button>
    </a>
    <a>
    <button>Workflow</button>
    </a>
    <a>
    <button>Calendar</button>
    </a>
    <a>
    <button>EDM</button>
    </a>
    <a>
    <button>Customer profiling</button>
    </a>
    <a>
    <button>Documentation</button>
    </a>
    <a>
    <button>Customer support</button>
    </a>
    <a>
    <button>Contacts</button>
    </a>
    <a>
    <button>Reports</button>
    </a>
    </div>
</div>
  )
}

export default Navbar
