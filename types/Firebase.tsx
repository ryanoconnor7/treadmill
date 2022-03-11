export interface LocationResponse {
  cameras: Camera[];
  name: string;
}

export interface Camera {
  description: string;
  units: Unit[];
  updates: Update[];
}

export interface Unit {
  bbox: string;
  type: string;
}

export interface Update {
  occupancy: boolean[];
  timestamp: number;
}
