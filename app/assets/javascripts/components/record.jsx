class Record extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    $.ajax({
      method: "DELETE",
      url: `/records/${this.props.record.id}`,
      // refactor: dataType: "JSON" not necessary?
      // dataType: "JSON",
      success: (result) => {
        this.props.handleDeleteRecord(this.props.record);
      }
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td><a href="#" className="btn btn-danger" onClick={this.handleDelete}>Delete</a></td>
      </tr>
    )
  }
}