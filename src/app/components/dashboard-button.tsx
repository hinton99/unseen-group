import React, { ReactNode } from 'react'

export interface dashboardButtonProps {
	icon: ReactNode;
	number: number;
	title: string;
}

export const DashboardButton = (props: dashboardButtonProps) => {
  return (
		<div className="items-center px-4 py-6 shadow-md rounded-md border-2">
			{props.icon}
			<div className="text-center">
				<h3 className="text-xl md:text-3xl font-semibold">{props.number}</h3>
				<h4 className="md:text-xl font-semibold">{props.title}</h4>
			</div>
		</div>
)
}
