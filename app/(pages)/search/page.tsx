import Input from "@/components/Input";
import { IoSearch } from "react-icons/io5";

const page = () => {
  return (
    <div className="lg:p-8 p-4">
      <h1 className="font-bold text-3xl">Search</h1>
      <Input
        type="text"
        name="search-text"
        placeholder="Search"
        elem={<IoSearch size={25} />}
        elemClass="cursor-pointer"
      />
      <section className="">
        <div>div 1</div>
        <div>div 2</div>
        <div>div 3</div>
        <div>div 4</div>
      </section>
    </div>
  );
};

export default page;
