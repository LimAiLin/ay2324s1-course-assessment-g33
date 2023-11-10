import { Chip } from "@mui/material";
import React from "react";

function Tags(props) {
	const { tags } = props;
	return tags.map((tag, index) => {
		return (
			<Chip
				key={index}
				label={tag.name}
				size="small"
				sx={{ ml: 1, color: "primary.contrastText" }}
			/>
		);
	});
}

export default Tags;
