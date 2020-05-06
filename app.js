const maxDistance = 100;
let A = [
    [10.39857837	,23.48750403	,44.80102933	,63.27170479	,44.12667079	,35.14903746	,46.52994188	,62.68843531	,50.45178674	,28.98935553	,24.73000781	,22.76065013	,43.27131727	,17.2616496	,31.55322763	,8.310487744	,17.93717637	,3.979701318	,4.16994009	,2.336111086],
        [5.09251571	,7.880717484	,19.218235	,37.55939605	,28.46701111	,22.76284912	,33.96570218	,38.39242371	,34.94626695	,24.82257843	,21.80535654	,47.39486904	,64.44016995	,30.44916111	,9.131817249	,10.10524097	,5.372471204	,12.75694127	,20.34626569	,15.27052513],
            [34.1093194	,46.17994981	,26.51787877	,43.29102302	,34.17465381	,16.72241345	,16.59969557	,18.42594266	,13.1062374	,12.33175438	,43.9980163	,34.79001726	,36.90850955	,16.46669478	,48.20136606	,36.37777469	,35.91840782	,17.40998567	,6.420676029	,12.7286932],
                [18.28486877	,37.05337102	,30.53979195	,22.22670387	,22.85612855	,12.74956376	,16.04163866	,12.66990318	,30.29219184	,15.0436555	,30.69570359	,65.26849065	,56.26220348	,58.37678867	,48.48301303	,42.38721911	,29.55676624	,28.44080614	,34.9279528	,38.07555757],
                    [14.51904497	,15.42599297	,13.11843953	,9.115874019	,9.068278702	,9.383229575	,12.97601663	,44.72221897	,35.48462937	,45.92235895	,43.68177989	,65.22505044	,63.92243432	,51.11654119	,47.14317299	,42.91499939	,35.59576299	,7.522694423	,9.840135194	,8.876010588],
                        [7.71853895	,11.80611183	,8.8076074	,15.50384542	,10.53782129	,9.016032781	,33.38051912	,43.36707404	,30.3585572	,17.33462348	,74.57463897	,55.27446986	,49.41788727	,38.5638526	,36.22099702	,20.92830682	,6.86099846	,6.334001944	,7.284713476	,9.757043923],
                            [7.382801382	,12.88641973	,17.09983884	,18.6752663	,28.63168397	,23.54020716	,28.87729158	,19.80012897	,20.72385858	,13.0832212	,47.20797284	,46.81161793	,73.88252274	,30.26618003	,35.62853629	,30.85894369	,8.32945746	,29.52666804	,46.05166913	,37.41549709],
                                [32.98597491	,32.3138911	,27.66937018	,35.65935442	,44.95337048	,30.6011921	,20.09235246	,29.68481212	,34.23281044	,21.3261844	,24.63007845	,34.95346249	,13.88372399	,13.66720816	,34.54505762	,47.91957378	,34.88413011	,40.14250497	,28.38491112	,27.99209535],
                                    [58.35229186	,41.31254945	,17.58083485	,16.55778216	,21.37614913	,15.7982152	,30.94081044	,18.53095051	,20.38094073	,41.55206496	,34.66988541	,35.93949141	,14.95983059	,21.18298473	,36.51790845	,9.515967877	,14.23548154	,17.78135355	,15.19280626	,18.33615703],
                                        [11.73438174	,16.1555078	,14.43196889	,22.16333671	,11.10351384	,36.55870914	,47.27105998	,44.04763085	,29.11774388	,38.00127842	,25.55882166	,14.59959197	,13.39659754	,26.91763489	,12.31183412	,12.56411785	,15.92939608	,10.87976138	,12.36145459	,33.15870902],
    ];

let B = [
    [18.87052998	,43.18331413	,52.26822847	,45.54012211	,46.82107097	,46.68716629	,67.95658021	,66.31622414	,70.48252414	,62.08579651	,39.77639757	,50.30345017	,75.99068988	,52.90694188	,44.98601796	,32.0934379	,64.85322047	,37.41975856	,19.30233519	,9.460521076],
        [15.50516072	,17.04266733	,42.03303415	,40.67896589	,33.58333982	,34.38519286	,39.11511775	,45.69949144	,47.92485756	,53.59051722	,56.08115501	,49.86511599	,70.67899508	,60.57909823	,33.08184404	,33.79989939	,24.78401037	,29.64472891	,33.96748498	,33.88170254],
            [37.72352509	,40.07793831	,40.65655406	,40.06754693	,31.07035894	,27.24614503	,28.08082867	,32.8514601	,40.29574224	,44.27976116	,68.06545969	,54.29393335	,66.96561861	,53.52570109	,56.40861222	,49.81540188	,48.38710416	,37.44416361	,28.01484986	,38.04128012],
                [28.34254885	,37.50664668	,37.7222199	,38.96034601	,43.09960415	,44.35017878	,49.17447144	,50.28605774	,65.43159209	,56.21887406	,62.51473728	,60.26190185	,70.37687987	,72.12572373	,75.1793113	,62.31831433	,57.02544779	,54.13470419	,49.79878725	,44.03176301],
                    [23.49271651	,27.64365086	,29.14621476	,33.62013833	,43.06260895	,51.80297148	,50.71611088	,75.91232399	,58.91888023	,53.03860163	,56.67883021	,81.29631046	,86.60380188	,79.43993198	,66.76104749	,70.47572168	,67.49882247	,48.89278015	,43.30562447	,28.57349247],
                        [22.95344411	,32.50325371	,34.90253956	,42.16749053	,49.31511437	,57.60243979	,62.4503592	,70.50910569	,59.89450966	,52.84326214	,81.65865088	,77.99191437	,66.08129185	,64.09446022	,60.1552882	,56.75847539	,46.4374161	,47.87544079	,34.42109524	,26.54508368],
                            [29.04687848	,34.27827129	,45.21415077	,52.7417286	,64.50394887	,71.86473203	,60.09061337	,62.22635663	,55.11395108	,47.97042098	,63.30697717	,59.04293822	,79.94352181	,66.05020615	,57.88079245	,43.89839071	,44.48591437	,45.66023228	,53.58811795	,38.62351417],
                                [42.24810796	,41.16172317	,51.09481266	,64.47909579	,78.18295753	,64.44510619	,48.63078869	,45.89545817	,52.46471818	,52.26397784	,54.46025982	,62.72401024	,45.20148174	,36.75051579	,48.15486571	,47.8684022	,46.50316851	,56.81716577	,43.0472527	,32.36245279],
                                    [47.37696676	,40.7658323	,33.45015225	,33.32606071	,47.4737268	,44.57468957	,44.62871757	,50.13724872	,49.52776482	,60.00743018	,56.1609521	,40.25844393	,37.79149425	,29.12618167	,36.41112567	,31.77238766	,29.34740941	,30.28101606	,24.64900307	,24.67111022],
                                        [12.57373613	,25.18003468	,24.43463637	,27.72252903,28.33572496	,44.24540857	,58.19229429	,73.88162794	,54.9915673	,49.89525597	,37.37150045	,38.69540241	,33.10255441	,33.32249484	,34.41599052	,38.16060054	,43.62339919	,30.89149304	,30.30555028	,31.1360663],
]

function getMax(matrix)
{
    var max = matrix [0][0];
    for (var i =0 ; i < matrix.length ;i++)
    {
        var b = matrix[i];
        for ( var j = 0 ; j < b.length ;j++)
        {
          if (matrix[i][j] > max)
          {
              max =  matrix[i][j];
          }
        }
    }
    return max;
}

function Matrix_M(distance){
    var result = [];
    var Mijd = 0;
    for (var i =0 ; i < A.length ;i++)
    {
        for ( var j = 0 ; j < A[i].length ;j++)
        {
        Mijd = ((distance/getMax(A)) * A[i][j]) + ((maxDistance-distance)/getMax(B) * B[i][j]);
        result.push(Math.round(Mijd,10));
        }
    }
    return result;
}


function makeTableHTML(matrix) {
    var result = `<table  class="table-sm" border=1>`;
    for(var i=0; i<matrix.length; i++) {
        result += "<tr>";
        for(var j=0; j<matrix[i].length; j++){
            if (matrix[i][j] > 0 &&  matrix[i][j] <= 20)
            {
                result += `<td class="table-primary">` +Math.round(matrix[i][j],10)+"</td>";
            }
            else if (matrix[i][j] > 20 &&  matrix[i][j] <= 30)
            {
                result += `<td class="table-info">` +Math.round(matrix[i][j],10)+"</td>";
            }
            else if (matrix[i][j] > 30 &&  matrix[i][j] <= 55)
            {
                result += `<td class="table-warning">` +Math.round(matrix[i][j],10)+"</td>";

            }
            else{
                result += `<td class="table-danger">` +Math.round(matrix[i][j],10)+"</td>";

            }
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}


function toMatrix(arr, width) {
    return arr.reduce(function (rows, key, index) { 
      return (index % width == 0 ? rows.push([key]) 
        : rows[rows.length-1].push(key)) && rows;
    }, []);
  }
  distance = $("#Calc").val();
  $("#matrixA").append(makeTableHTML(A));
  $("#matrixB").append(makeTableHTML(B));
  $("#matrixM").append(makeTableHTML(toMatrix(Matrix_M(distance),20)));
  $("#MaxA").append( getMax(A));
  $("#MaxB").append(getMax(B));
  $("#distance").html(distance);

  $('#Calc').change(function() {
    distance = $(this).val();
    if (distance <= maxDistance)
    {
        $("#matrixM").empty().append(makeTableHTML(toMatrix(Matrix_M(distance),20)));
        $("#distance").html(distance);
    }
    else{
        alert("max value is " + " " +  maxDistance);
    }
});