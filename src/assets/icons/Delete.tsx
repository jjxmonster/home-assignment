interface Props {
	color?: string;
}
export const Delete = ({ color }: Props) => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.66683 3V0.999999C3.66683 0.823188 3.73707 0.653618 3.86209 0.528594C3.98712 0.40357 4.15669 0.333332 4.3335 0.333332H9.66683C9.84364 0.333332 10.0132 0.40357 10.1382 0.528594C10.2633 0.653618 10.3335 0.823188 10.3335 0.999999V3H13.6668V4.33333H12.3335V13C12.3335 13.1768 12.2633 13.3464 12.1382 13.4714C12.0132 13.5964 11.8436 13.6667 11.6668 13.6667H2.3335C2.15669 13.6667 1.98712 13.5964 1.86209 13.4714C1.73707 13.3464 1.66683 13.1768 1.66683 13V4.33333H0.333496V3H3.66683ZM5.00016 1.66667V3H9.00016V1.66667H5.00016Z"
				fill={color ?? "#D61C1C"}
			/>
		</svg>
	);
};
