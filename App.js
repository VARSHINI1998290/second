import React,{ useState, useEffect } from 'react';


export default function App(){
  const [data,setData] = useState(null)
  
  let content=null
  useEffect(() => {
    fetch('http://timeapi.kaaylabs.com/api/v1/project_view/')
    .then(response => response.json())
    .then((json) => setData(json));
  },[])
  if(data) {

    return(
      <div class="table-responsive">
          <div id="filter"></div>
          
          <table class="table table-bordered table-dark table-hover table-condensed">
          <thead>
            <tr class="table-danger">
          <th> project_id </th>
          <th> project_code </th>
          <th> description </th>
          <th> start_date </th>
          <th> end_date </th>
          <th> company_name </th>
          <th> 
          <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                 status  <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
              <li><a href="#">Completed</a></li>
                  <li><a href="#">In Progress</a></li>
              </ul>
          </div>
          </th>
          </tr>
        </thead>
        <tbody>
      <tr>
          <td>{ data.data[0].project_id }</td>
          <td>{ data.data[0].project_code }</td>
          <td>{ data.data[0].description }</td>
          <td>{ data.data[0].start_date }</td>
          <td>{ data.data[0].end_date }</td>
          <td>{ data.data[0].company_name }</td >
          <td>{ data.data[0].status }</td>
      </tr>
      <tr>
          <td> {data.data[1].project_id} </td>
          <td> {data.data[1].project_code} </td>
          <td> {data.data[1].description} </td>
          <td> {data.data[1].start_date} </td>
          <td> {data.data[1].end_date} </td>
          <td> {data.data[1].company_name} </td >
          <td> { data.data[1].status } </td>
      </tr>
      <tr>
          <td> {data.data[2].project_id} </td>
          <td> {data.data[2].project_code} </td>
          <td> {data.data[2].description} </td>
          <td> {data.data[2].start_date} </td>
          <td> {data.data[2].end_date} </td>
          <td> {data.data[2].company_name} </td >
          <td> {data.data[2].status} </td>
      </tr>
      <tr>
          <td> {data.data[3].project_id} </td>
          <td> {data.data[3].project_code} </td>
          <td> {data.data[3].description} </td>
          <td> {data.data[3].start_date} </td>
          <td> {data.data[3].end_date} </td>
          <td> {data.data[3].company_name} </td >
          <td> {data.data[3].status} </td>
      </tr>
      <tr>
          <td> {data.data[4].project_id} </td>
          <td> {data.data[4].project_code} </td>
          <td> {data.data[4].description} </td>
          <td> {data.data[4].start_date} </td>
          <td> {data.data[4].end_date} </td>
          <td> {data.data[4].company_name} </td >
          <td> {data.data[4].status} </td>
      </tr>
      <tr>
          <td> {data.data[5].project_id} </td>
          <td> {data.data[5].project_code} </td>
          <td> {data.data[5].description} </td>
          <td> {data.data[5].start_date} </td>
          <td> {data.data[5].end_date} </td>
          <td> {data.data[5].company_name} </td >
          <td> {data.data[5].status} </td>
      </tr>
      <tr>
          <td> {data.data[6].project_id} </td>
          <td> {data.data[6].project_code} </td>
          <td> {data.data[6].description} </td>
          <td> {data.data[6].start_date} </td>
          <td> {data.data[6].end_date} </td>
          <td> {data.data[6].company_name} </td >
          <td> {data.data[6].status} </td>
      </tr>
      <tr>
          <td> {data.data[6].project_id} </td>
          <td> {data.data[6].project_code} </td>
          <td> {data.data[6].description} </td>
          <td> {data.data[6].start_date} </td>
          <td> {data.data[6].end_date} </td>
          <td> {data.data[6].company_name} </td >
          <td> {data.data[6].status} </td>
      </tr>
      <tr>
          <td> {data.data[7].project_id} </td>
          <td> {data.data[7].project_code} </td>
          <td> {data.data[7].description} </td>
          <td> {data.data[7].start_date} </td>
          <td> {data.data[7].end_date} </td>
          <td> {data.data[7].company_name} </td >
          <td> {data.data[7].status} </td>
      </tr>
      <tr>
          <td> {data.data[8].project_id} </td>
          <td> {data.data[8].project_code} </td>
          <td> {data.data[8].description} </td>
          <td> {data.data[8].start_date} </td>
          <td> {data.data[8].end_date} </td>
          <td> {data.data[8].company_name} </td >
          <td> {data.data[8].status} </td>
      </tr>
      <tr>
          <td> {data.data[9].project_id} </td>
          <td> {data.data[9].project_code} </td>
          <td> {data.data[9].description} </td>
          <td> {data.data[9].start_date} </td>
          <td> {data.data[9].end_date} </td>
          <td> {data.data[9].company_name} </td >
          <td> {data.data[9].status} </td>
      </tr>
      <tr>
          <td> {data.data[10].project_id} </td>
          <td> {data.data[10].project_code} </td>
          <td> {data.data[10].description} </td>
          <td> {data.data[10].start_date} </td>
          <td> {data.data[10].end_date} </td>
          <td> {data.data[10].company_name} </td >
          <td> {data.data[10].status} </td>
      </tr>
      <tr>
          <td> {data.data[11].project_id} </td>
          <td> {data.data[11].project_code} </td>
          <td> {data.data[11].description} </td>
          <td> {data.data[11].start_date} </td>
          <td> {data.data[11].end_date} </td>
          <td> {data.data[11].company_name} </td >
          <td> {data.data[11].status} </td>
      </tr>
      <tr>
          <td> {data.data[12].project_id} </td>
          <td> {data.data[12].project_code} </td>
          <td> {data.data[12].description} </td>
          <td> {data.data[12].start_date} </td>
          <td> {data.data[12].end_date} </td>
          <td> {data.data[12].company_name} </td >
          <td> {data.data[12].status} </td>
      </tr>
      <tr>
          <td> {data.data[13].project_id} </td>
          <td> {data.data[13].project_code} </td>
          <td> {data.data[13].description} </td>
          <td> {data.data[13].start_date} </td>
          <td> {data.data[13].end_date} </td>
          <td> {data.data[13].company_name} </td >
          <td> {data.data[13].status} </td>
      </tr>
      <tr>
          <td> {data.data[14].project_id} </td>
          <td> {data.data[14].project_code} </td>
          <td> {data.data[14].description} </td>
          <td> {data.data[14].start_date} </td>
          <td> {data.data[14].end_date} </td>
          <td> {data.data[14].company_name} </td >
          <td> {data.data[14].status} </td>
      </tr>
      <tr>
          <td> {data.data[15].project_id} </td>
          <td> {data.data[15].project_code} </td>
          <td> {data.data[15].description} </td>
          <td> {data.data[15].start_date} </td>
          <td> {data.data[15].end_date} </td>
          <td> {data.data[15].company_name} </td >
          <td> {data.data[15].status} </td>
      </tr>
      <tr>
          <td> {data.data[16].project_id} </td>
          <td> {data.data[16].project_code} </td>
          <td> {data.data[16].description} </td>
          <td> {data.data[16].start_date} </td>
          <td> {data.data[16].end_date} </td>
          <td> {data.data[16].company_name} </td >
          <td> {data.data[16].status} </td>
      </tr>
      <tr>
          <td> {data.data[17].project_id} </td>
          <td> {data.data[17].project_code} </td>
          <td> {data.data[17].description} </td>
          <td> {data.data[17].start_date} </td>
          <td> {data.data[17].end_date} </td>
          <td> {data.data[17].company_name} </td >
          <td> {data.data[17].status} </td>
      </tr>
      <tr>
          <td> {data.data[18].project_id} </td>
          <td> {data.data[18].project_code} </td>
          <td> {data.data[18].description} </td>
          <td> {data.data[18].start_date} </td>
          <td> {data.data[18].end_date} </td>
          <td> {data.data[18].company_name} </td >
          <td> {data.data[18].status} </td>
      </tr>
      <tr>
          <td> {data.data[19].project_id} </td>
          <td> {data.data[19].project_code} </td>
          <td> {data.data[19].description} </td>
          <td> {data.data[19].start_date} </td>
          <td> {data.data[19].end_date} </td>
          <td> {data.data[19].company_name} </td >
          <td> {data.data[19].status} </td>
      </tr>
      <tr>
          <td> {data.data[20].project_id} </td>
          <td> {data.data[20].project_code} </td>
          <td> {data.data[20].description} </td>
          <td> {data.data[20].start_date} </td>
          <td> {data.data[20].end_date} </td>
          <td> {data.data[20].company_name} </td >
          <td> {data.data[20].status} </td>
      </tr>
      </tbody>
      </table>
      </div>
    
    );
  }
  return(
    <div>
      {content}
    </div>
  )
  }
