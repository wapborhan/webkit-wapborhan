"use client";
import { useState } from "react";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

// react router dom
import Link from "next/link";
import Badge from "@/components/shared/Badge";
import { usePathname } from "next/navigation";

const Sidebar = ({ startContent, setStartContent }) => {
  const [start, setStart] = useState(true);
  const [components, setComponents] = useState(true);
  const [blocks, setBlocks] = useState(true);
  const pathname = usePathname();

  console.log(pathname);

  const fristActive =
    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] !text-secondary font-[500]";
  const secondActive =
    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]";

  return (
    <aside className="py-6 px-10 border-r h-[89vh] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] bg-secondary z-20 1024px:flex hidden">
      {/*  get starts  */}
      <div>
        <h3
          className={`${
            start ? "text-[#0471d6]" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer `}
          onClick={() => setStart(!start)}
        >
          getting-started
          <MdKeyboardArrowRight
            className={`${
              start && "rotate-[90deg] !text-[#0471d6]"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            start ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul className={`flex flex-col ml-2 mt-3 overflow-hidden pl-4`}>
            <Link
              href="/getting-started/overview"
              className={`${
                pathname === "/getting-started/overview" && fristActive
              }  text-text border-l border-[#9caebc]`}
            >
              Overview
            </Link>
            <Link
              href="/getting-started/usage"
              className={`${
                pathname === "/getting-started/usage" && fristActive
              }   border-l text-text border-[#9caebc] flex items-center gap-3`}
            >
              Usage
            </Link>
            <Link
              href="/getting-started/platforms"
              className={`${
                pathname === "/getting-started/platforms" && fristActive
              }   border-l text-text border-[#9caebc] flex items-center gap-3`}
            >
              Supported platforms
            </Link>
          </ul>
        </div>
      </div>

      {/*  components  */}
      <div>
        <h3
          className={`${
            components ? "text-[#0471d6]" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
          onClick={() => setComponents(!components)}
        >
          Components
          <MdKeyboardArrowRight
            className={`${
              components && "rotate-[90deg] !text-[#0471d6]"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>

        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
          >
            <Link
              href={"/components/all-components"}
              className={`${
                startContent === 2 && secondActive
              }   border-l border-[#9caebc] `}
            >
              All Components
            </Link>

            {/* inputs */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              Inputs
            </Link>

            <Link
              href={"/components/input-text"}
              className={`${
                startContent === 3 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(3)}
            >
              Input
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/input-textarea"}
              className={`${
                startContent === 4 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(4)}
            >
              Textarea
            </Link>
            <Link
              href={"/components/input-number"}
              className={`${
                startContent === 5 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(5)}
            >
              Number
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/input-checkbox"}
              className={`${
                startContent === 6 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(6)}
            >
              Checkbox
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/input-switch"}
              className={`${
                startContent === 7 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(7)}
            >
              Switch
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/strong-password"}
              className={`${
                startContent === 8 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(8)}
            >
              Strong Password
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/input-select"}
              className={`${
                startContent === 9 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(9)}
            >
              Select
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/input-radio"}
              className={`${
                startContent === 10 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(10)}
            >
              Radio
            </Link>
            <Link
              href={"/components/input-range"}
              className={`${
                startContent === 11 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(11)}
            >
              Range
              <Badge title="New" />
            </Link>
            {/*<Link*/}
            {/*  to={"/components/input-radio-group"}*/}
            {/*  className={`${*/}
            {/*    startContent === 11 &&*/}
            {/*    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
            {/*  }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
            {/*  onClick={() => setStartContent(11)}*/}
            {/*>*/}
            {/*  Radio Group*/}

            {/*  <Badge/>*/}
            {/*</Link>*/}
            <Link
              href={"/components/input-file"}
              className={`${
                startContent === 12 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(12)}
            >
              File
            </Link>
            <Link
              href={"/components/otp-input"}
              className={`${
                startContent === 13 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(13)}
            >
              OTP Input
              <Badge title="New" />
            </Link>

            {/* buttons */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest  font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              Buttons
            </Link>
            <Link
              href={"/components/normal-button"}
              className={`${
                startContent === 14 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(14)}
            >
              normal button
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/login-buttons"}
              className={`${
                startContent === 15 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(15)}
            >
              login Button
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/dropdown-button"}
              className={`${
                startContent === 16 &&
                "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(16)}
            >
              Dropdown Button
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/animated-button"}
              className={`${
                startContent === 17 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(17)}
            >
              animated button
              <Badge title="Update" />
            </Link>

            {/* SURFACES */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
            >
              SURFACES
            </Link>
            <Link
              href={"/components/cards"}
              className={`${
                startContent === 18 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(18)}
            >
              Cards
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/according"}
              className={`${
                startContent === 19 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(19)}
            >
              Accordion
            </Link>
            {/*<Link*/}
            {/*    to={"/components/resizable-card"}*/}
            {/*    className={`${*/}
            {/*        startContent === 20 &&*/}
            {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
            {/*    }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
            {/*    onClick={() => setStartContent(20)}*/}
            {/*>*/}
            {/*  Resizable Card*/}

            {/*  <Badge/>*/}
            {/*</Link>*/}
            <Link
              href={"/components/appbar"}
              className={`${
                startContent === 20 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(20)}
            >
              App bar
            </Link>
            <Link
              href={"/components/image-gallery"}
              className={`${
                startContent === 21 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(21)}
            >
              Image Gallery
            </Link>

            {/* navigation */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
            >
              navigation
            </Link>
            <Link
              href={"/components/pagination"}
              className={`${
                startContent === 22 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(22)}
            >
              Pagination
            </Link>
            <Link
              href={"/components/progress-bar"}
              className={`${
                startContent === 23 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(23)}
            >
              Progress Bar
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/chip"}
              className={`${
                startContent === 24 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(24)}
            >
              Chip
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/breadcrumb"}
              className={`${
                startContent === 25 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(25)}
            >
              Breadcrumb
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/rating"}
              className={`${
                startContent === 26 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(26)}
            >
              Rating
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/stepper"}
              className={`${
                startContent === 27 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(27)}
            >
              Stepper
              <Badge title="New" />
            </Link>
            <Link
              href={"/components/modal"}
              className={`${
                startContent === 28 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(28)}
            >
              modal
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/tabs"}
              className={`${
                startContent === 29 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(29)}
            >
              tabs
            </Link>

            {/* FEEDBACK */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
            >
              feedback
            </Link>
            <Link
              href={"/components/skeleton"}
              className={`${
                startContent === 30 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(30)}
            >
              skeleton
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/alert-message"}
              className={`${
                startContent === 31 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(31)}
            >
              alert message
            </Link>
            <Link
              href={"/components/dialog-message"}
              className={`${
                startContent === 32 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(32)}
            >
              dialog
            </Link>
            <Link
              href={"/components/testimonials"}
              className={`${
                startContent === 33 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(33)}
            >
              Testimonial
            </Link>
            <Link
              href={"/components/loader"}
              className={`${
                startContent === 34 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(34)}
            >
              Loader
            </Link>
            <Link
              href={"/components/notification"}
              className={`${
                startContent === 35 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(35)}
            >
              Notification
              <Badge title="Update" />
            </Link>

            {/* data display */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              data display
            </Link>
            <Link
              href={"/components/badge"}
              className={`${
                startContent === 36 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(36)}
            >
              Badge
              <Badge title="Update" />
            </Link>
            <Link
              href={"/components/tooltip"}
              className={`${
                startContent === 37 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(37)}
            >
              tooltip
              <Badge title="Update" />
            </Link>
            {/*<Link*/}
            {/*  to={"/components/chart"}*/}
            {/*  className={`${*/}
            {/*    startContent === 38 &&*/}
            {/*    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
            {/*  }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
            {/*  onClick={() => setStartContent(38)}*/}
            {/*>*/}
            {/*  Pie Chart*/}

            {/*  <Badge/>*/}
            {/*</Link>*/}
            <Link
              href={"/components/timeline"}
              className={`${
                startContent === 38 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(38)}
            >
              timeline
              <Badge title="New" />
            </Link>

            {/* Randoms */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              Randoms
            </Link>

            <Link
              href={"/components/code"}
              className={`${
                startContent === 39 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(39)}
            >
              Code
            </Link>
            <Link
              href={"/components/snippet"}
              className={`${
                startContent === 40 &&
                "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(40)}
            >
              Snippet
            </Link>
          </ul>
        </div>
      </div>

      {/*  blocks  */}
      <div>
        <h3
          className={`${
            blocks ? "text-[#0471d6]" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer`}
          onClick={() => setBlocks(!blocks)}
        >
          <div className="flex items-center gap-[10px]">
            Blocks
            <Badge title="New" />
          </div>

          <MdKeyboardArrowRight
            className={`${
              blocks && "rotate-[90deg] !text-[#0471d6]"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>

        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            blocks ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
          >
            <Link
              href={"/blocks/all-blocks"}
              className={`${
                startContent === 41 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
              onClick={() => setStartContent(41)}
            >
              All Blocks
            </Link>

            {/* sections */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              Sections
            </Link>

            <Link
              href={"/blocks/responsive-navbar"}
              className={`${
                startContent === 42 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(42)}
            >
              Responsive Navbar
            </Link>
            <Link
              href={"/blocks/hero-section"}
              className={`${
                startContent === 43 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(43)}
            >
              Hero Section
            </Link>
            <Link
              href={"/blocks/pricing-section"}
              className={`${
                startContent === 44 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(44)}
            >
              Pricing Section
            </Link>
            <Link
              href={"/blocks/responsive-footer"}
              className={`${
                startContent === 45 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(45)}
            >
              Responsive Footer
            </Link>
            {/*<Link*/}
            {/*    to={"/blocks/testimonial-section"}*/}
            {/*    className={`${*/}
            {/*        startContent === 46 &&*/}
            {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
            {/*    }   border-l border-[#9caebc]`}*/}
            {/*    onClick={() => setStartContent(46)}*/}
            {/*>*/}
            {/*  Testimonial Section*/}
            {/*</Link>*/}

            {/* Forms */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              Forms
            </Link>

            <Link
              href={"/blocks/contact-form"}
              className={`${
                startContent === 46 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(46)}
            >
              Contact Form
            </Link>
            {/*<Link*/}
            {/*    to={"/blocks/form-validation"}*/}
            {/*    className={`${*/}
            {/*        startContent === 43 &&*/}
            {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
            {/*    }   border-l border-[#9caebc]`}*/}
            {/*    onClick={() => setStartContent(43)}*/}
            {/*>*/}
            {/*  Form Validation*/}
            {/*</Link>*/}
            <Link
              href={"/blocks/multi-step-form"}
              className={`${
                startContent === 47 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(47)}
            >
              Multi-Step Form
            </Link>
            <Link
              href={"/blocks/newsletter-form"}
              className={`${
                startContent === 48 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(48)}
            >
              Newsletter Form
            </Link>

            {/* empty pages */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              Empty Pages
            </Link>

            <Link
              href={"/blocks/404-page"}
              className={`${
                startContent === 49 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(49)}
            >
              404 Page
            </Link>
            <Link
              href={"/blocks/empty-page"}
              className={`${
                startContent === 50 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(50)}
            >
              Empty Page
            </Link>

            {/* Randoms */}
            <Link
              href={""}
              className={`sectionHeader tracking-widest  font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
            >
              random
            </Link>
            <Link
              href={"/blocks/responsive-search-bar"}
              className={`${
                startContent === 51 &&
                "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc] flex items-center gap-[10px]`}
              onClick={() => setStartContent(51)}
            >
              Responsive Search Bar
            </Link>
            <Link
              href={"/blocks/responsive-sidebar"}
              className={`${
                startContent === 52 &&
                "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
              }   border-l border-[#9caebc]`}
              onClick={() => setStartContent(52)}
            >
              Responsive Sidebar
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
