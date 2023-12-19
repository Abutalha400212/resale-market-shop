import { FaUserAlt } from "react-icons/fa";
import { SiKeepassxc } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { AiTwotoneShop } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiLoveMystery } from "react-icons/gi";
import { IoBagAdd } from "react-icons/io5";
import { FcShop } from "react-icons/fc";
const commonItems = [
  {
    icon: <FaUserAlt className="inline-block text-lg mr-1.5" />,
    href: "profile",
    label: "Profile",
  },
  {
    icon: <SiKeepassxc className="inline-block text-xl mr-1" />,
    href: "change_password",
    label: "Change Password",
  },
];

const userItems = [
  ...commonItems,
  {
    icon: <BsCartCheckFill className="inline-block text-xl mr-1" />,
    href: "cart",
    label: "My Cart",
  },
  {
    icon: <RiSecurePaymentFill className="inline-block text-xl mr-1" />,
    href: "orders",
    label: "My orders",
  },
  {
    icon: <GiLoveMystery className="inline-block text-xl mr-1" />,
    href: "wishlist",
    label: "Wishlist",
  },
];
const adminItems = [
  ...commonItems,
  {
    icon: <HiUsers className="inline-block text-xl mr-1" />,
    href: "all_users",
    label: "All Users",
  },
  {
    icon: <FcShop className="inline-block text-xl mr-1" />,
    href: "all_products",
    label: "All Products",
  },
];
const sellerItems = [
  ...commonItems,
  {
    icon: <IoBagAdd className="inline-block text-xl mr-1 " />,
    href: "add_product",
    label: "Add Product",
  },
  {
    icon: <AiTwotoneShop className="inline-block text-xl mr-1" />,
    href: `products`,
    label: "My Products",
  },
];

export const DashboardItems = {
  userItems,
  sellerItems,
  adminItems,
};
