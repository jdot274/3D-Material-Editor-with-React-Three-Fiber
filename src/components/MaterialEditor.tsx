import { Settings, Download } from 'lucide-react';
import { useMaterialStore } from '../stores/materialStore';
import { exportToGLB } from '../utils/exportGLB';

export const MaterialEditor = () => {
  const { materialProps, updateMaterial } = useMaterialStore();

  const handleExport = () => {
    exportToGLB(materialProps);
  };

  const parameters = [
    { label: 'Base Color', key: 'baseColor', type: 'color' },
    { label: 'Subsurface Color', key: 'subsurfaceColor', type: 'color' },
    { label: 'Metallic', key: 'metallic', type: 'range' },
    { label: 'Specular', key: 'specular', type: 'range' },
    { label: 'Roughness', key: 'roughness', type: 'range' },
    { label: 'Specular Tint', key: 'specularTint', type: 'range' },
    { label: 'Anisotropic', key: 'anisotropic', type: 'range' },
    { label: 'Sheen', key: 'sheen', type: 'range' },
    { label: 'Sheen Tint', key: 'sheenTint', type: 'range' },
    { label: 'Clearcoat', key: 'clearcoat', type: 'range' },
    { label: 'Clearcoat Roughness', key: 'clearcoatRoughness', type: 'range' },
    { label: 'Transmission', key: 'transmission', type: 'range' },
    { label: 'IOR', key: 'ior', type: 'range', min: 1, max: 2.5, step: 0.01 },
    { label: 'Emission', key: 'emission', type: 'color' },
    { label: 'Emission Strength', key: 'emissionStrength', type: 'range', max: 10 },
    { label: 'Alpha', key: 'alpha', type: 'range' },
    { label: 'Normal', key: 'normal', type: 'range' },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-6 h-full overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-white">
          <Settings className="w-5 h-5" />
          <h2 className="text-xl font-bold">BSDF Material Editor</h2>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export GLB
        </button>
      </div>

      <div className="space-y-4">
        {parameters.map(({ label, key, type, min = 0, max = 1, step = 0.01 }) => (
          <div key={key} className="space-y-2">
            <label className="flex items-center gap-2 text-white">
              <span>{label}</span>
            </label>
            {type === 'color' ? (
              <input
                type="color"
                value={materialProps[key]}
                onChange={(e) => updateMaterial({ [key]: e.target.value })}
                className="w-full h-8 rounded cursor-pointer"
              />
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={materialProps[key]}
                  onChange={(e) => updateMaterial({ [key]: parseFloat(e.target.value) })}
                  className="flex-1"
                />
                <span className="text-white w-12 text-right">
                  {materialProps[key].toFixed(2)}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};