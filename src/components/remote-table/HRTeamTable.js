import {
  Card,
  Container,
  Grid,
  Button,
  Table,
  SplitDropdownButton,
  DropdownItem,
  SECONDARY_BUTTON,
  SIZE_SMALL,
} from "@mds/mds-reactjs-library";

const HRTeamTable = () => {
  //Edit Iberia HR Team
  const x = [
    {
      dataKey: "name",
      label: "Name",
      width: 100,
      sortable: false,
      flexGrow: true,
    },
    { dataKey: "office", label: "Office", width: 100, flexGrow: true },
    { dataKey: "function", label: "Function", width: 100, flexGrow: true },
    { dataKey: "edit", label: "", width: 50, flexGrow: true },
  ];
  const y = [
    {
      name: "Maria Mary",
      office: "Lisbon",
      director: "Yes",
      skills: "N/A",
      edit: (
        <SplitDropdownButton
          label="Edit"
          appearance={SECONDARY_BUTTON}
          size={SIZE_SMALL}
        >
          <DropdownItem>
            <Button appearance={SECONDARY_BUTTON} size={SIZE_SMALL}>
              Delete
            </Button>
          </DropdownItem>
        </SplitDropdownButton>
      ),
    },
  ];

  //Team Structure

  return (
    <>
      <Table dark={false} columns={x} rows={y} />
    </>
  );
};

export default HRTeamTable;
