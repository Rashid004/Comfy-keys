/** @format */

import About from "@/components/pages/About";
import Amenties from "@/components/pages/Amenties";
import Footer from "@/components/pages/Footer";
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
      <Footer />
    </div>
  );
}

export default page;
