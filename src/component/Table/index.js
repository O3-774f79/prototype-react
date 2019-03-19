import React,{Component} from "react";
import { Table } from "antd";
import Measure from "react-measure";
import "antd/dist/antd.css";
import "./style.css";
export default class ResponsiveTableExample extends Component {
  state = {
    columns: this.props.column,
    hiddenColumns: []
  };
  render() {
    let expandedRowRender = undefined;
    const renderExpandRow = (record, index, indent, expanded)=> {
        const expandedTableColumns = [
            { title: "Column", dataIndex: "columnName" },
            { title: "Value", dataIndex: "value" }
          ];
        if (expanded) {
            const data = this.state.hiddenColumns.map(c => {
            const data = { columnName: c.title, value: record[c.dataIndex] };
            return data;
          });
          return (
            <Table
              columns={expandedTableColumns}
              dataSource={data}
              pagination={false}
              showHeader={false}
            />
          );
        }
      }
        if (this.state.hiddenColumns.length > 0) {
            expandedRowRender = renderExpandRow;
        }
    return (
      <div>
        <Measure
          scroll
          bounds
          onResize={contentRect => {
            this.recalculateColumns(
              contentRect.bounds.width,
              contentRect.scroll.width
            );
          }}>
          {({ measureRef, measure, contentRect }) => {
            this.measure = measure;
            return (
              <div ref={measureRef}>
                <Table
                  columns={this.state.columns}
                  dataSource={this.props.data}
                  rowClassName={() => "responsive-row"}
                  pagination={{ defaultPageSize: this.props.defaultPageSize }}
                  expandedRowRender={expandedRowRender}
                />
              </div>
            );
          }}
        </Measure>
      </div>
    );
  }

  recalculateColumns(availableWidth, tableWidth) {
    // console.log(`availableWidth: ${availableWidth} tableWidth: ${tableWidth}`);
    if (availableWidth < tableWidth) {
      const columns = this.state.columns.slice();
      const columnToHide = columns.pop();
      const hiddenColumns = this.state.hiddenColumns.slice();
      hiddenColumns.splice(0, 0, columnToHide);
      this.setState({ columns, hiddenColumns }, () => {
        if (this.measure) {
          setTimeout(this.measure, 1);
        }
      });
      this.lastAvailableWidth = availableWidth;
    } else if (
      this.lastAvailableWidth &&
      this.lastAvailableWidth < availableWidth &&
      this.state.hiddenColumns.length > 0
    ) {
      this.setState({ columns: this.props.column, hiddenColumns: [] }, () => {
        if (this.measure) {
          setTimeout(this.measure, 1);
        }
      });
    }
  }
}
