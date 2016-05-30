class Records extends React.Component {
  constructor(props, context) {
    // Calls React.Component's constructor with our parameters
    // In comparison to the coffeeScript, I believe state is context and props is props
    super(props, context);
    this.records = props.data;
    this.state = {
      records: this.records
    }
  }

  addRecord(record) {
    let records = this.state.records.slice();
    records.push(record);
    this.setState({records: records});
  }

  render() {
    return (
      <div className="records">
        <h2 className="title col-md-12">Records</h2>
        <RecordForm handleNewRecord={this.addRecord}></RecordForm>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            { this.state.records.map((record) =>
              <Record key={record.id} record={record}></Record>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}