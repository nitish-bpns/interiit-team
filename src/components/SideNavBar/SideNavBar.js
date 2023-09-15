import React, { useState } from "react";
import './SideNavBar.css'

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Overall Coordinator",
			icon: "icons/ovreall.svg",
			link: "/",
		},
		{
			text: "Event",
			icon: "icons/event.svg",
			link: "/Events",
		},
		{
			text: "Logistics",
			icon: "icons/event.svg",
			link: "/Logistics",
		},
		{
			text: "Sponsorship",
			icon: "icons/event.svg",
			link: "/Sponsorship",
		},
		{
			text: "Media and Publicity",
			icon: "icons/event.svg",
			link: "/Media",
		},
		{
			text: "Outreach & Hospitality",
			icon: "icons/event.svg",
			link: "/Outreach",
		},
		{
			text: "Web",
			icon: "icons/web.svg",
			link: "/Web",
		},

	];
	return (
		<div className={
			isExpanded ? "side-nav-container"
				: "side-nav-container side-nav-container-NX"}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/LeftLogo.png" alt="" srcset="" />
						</div>
					)}

					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, link }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={link}
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default SideNavBar;
