type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tablestatus: RowObj[] = [
	{
		name: 'Tony  ',
		progress: 75.5,
		status: 'Available',
		date: '12 Aug 2024'
	},
	{
		name: 'Karl',
		progress: 25.5,
		status: 'occupied',
		date: '12 Aug 2024'
	},
	{
		name: 'Andrea',
		progress: 90,
		status: 'reserved',
		date: '12 Aug 2024'
	},
	{
		name: 'abraham',
		progress: 50.5,
		status: 'Available',
		date: '12 Aug 2024'
	}
];
export default tablestatus;
