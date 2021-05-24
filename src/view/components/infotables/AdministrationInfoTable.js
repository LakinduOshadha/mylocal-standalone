import React from 'react';

import GeoServer from 'model/GeoServer.js';
import AbstractInfoTable from './AbstractInfoTable.js';
import EntityLink from 'view/components/EntityLink.js';
import './AbstractInfoTable.css';

export default class AdministrationInfoTable extends AbstractInfoTable {
  getTitle() {
    return 'Administration';
  }
  async getDataList() {
    const {latLng} = this.props;

    const {
      province: provinceID,
      district: districtID,
      dsd: dsdID,
      gnd: gndID,
    } = await GeoServer.getRegionInfo(latLng);

    return [
      ['Province', provinceID],
      ['District', districtID],
      ['Divisional Secretariat Division', dsdID],
      ['Grama Niladhari Division', gndID],
    ].map(
      function([entityLabel, entityID]) {
        return {
          label: entityLabel,
          content: <EntityLink entityID={entityID} />,
        };
      },
    )
  }
}
