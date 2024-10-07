import Badge from "@/components/shared/Badge";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Blocks = ({ blocks, startContent, setStartContent }) => {
  return (
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
  );
};

export default Blocks;
