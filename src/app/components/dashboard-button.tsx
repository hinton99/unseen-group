import React, { ReactNode } from 'react'

export interface dashboardButtonProps {
	icon: ReactNode;
	number: number;
	title: string;
}

export const DashboardButton = (props: dashboardButtonProps) => {
  return (
		<div className="items-center px-4 py-6 border-2 rounded-md shadow-md">
			{props.icon}
			<div className="text-center">
				<h3 className="text-xl font-semibold md:text-3xl">{props.number}</h3>
				<h4 className="font-semibold md:text-xl">{props.title}</h4>
			</div>
		</div>
)
}
