/** @format */

import About from "@/components/pages/About";
import Amenties from "@/components/pages/Amenties";
import FormCta from "@/components/pages/FormCta";
import Home from "@/components/pages/Home";
import Partner from "@/components/pages/Partner";

function page() {
  return (
    <div>
      <Home />
      <About />
      <Amenties />
      <Partner />
      <FormCta />
    </div>
  );
}

export default page;
