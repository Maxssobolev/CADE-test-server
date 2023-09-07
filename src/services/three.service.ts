export interface IConeParams {
    radius: number,
    height: number,
    segments: number,
}


export class ThreeService {

    async calculate({radius, height, segments}: IConeParams) {
        const vertices = [];
        const triangles = [];

        const A = { x: 0, y: 0, z: height };
        vertices.push(A);

        for (var i = 0; i < segments; i++) {
            var angle = (2 * Math.PI * i) / segments;
            var x = radius * Math.cos(angle);
            var y = radius * Math.sin(angle);
            var Pi = { x: x, y: y, z: 0 };
            vertices.push(Pi);
        }
        
        for (var i = 1; i <= segments; i++) {
            var triangle = [0, i, (i % segments) + 1];
            triangles.push(triangle);
        }

        return { vertices, triangles };
    }
  
}
