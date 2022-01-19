<?php

namespace WeDevs\Dokan\ProductSections;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Best Selling products section class.
 *
 * For displaying best selling products section to single store page.
 *
 * @since 3.3.7
 *
 * @package dokan
 */
class BestSelling extends AbstractProductSection {
    /**
     * Set unique section id for the this section.
     *
     * @since 3.3.7
     *
     * @return void
     */
    protected function set_section_id() {
        $this->section_id = 'best_selling';
    }

    /**
     * Get single store page section title.
     *
     * @since 3.3.7
     *
     * @return string
     */
    public function get_section_title() {
        $sections_appearance = dokan_get_option( 'product_sections', 'dokan_appearance' );
        $section_title       = isset( $sections_appearance[ $this->get_section_id() . '_title' ] ) ? $sections_appearance[ $this->get_section_id() . '_title'] : __( 'Best Selling Products' , 'dokan-lite' );

        return apply_filters( "dokan_{$this->get_section_id()}_product_section_title", $section_title );
    }

    /**
     * Get label for this section.
     *
     * @since 3.3.7
     *
     * @return string
     */
    public function get_section_label() {
        return __( 'best selling products', 'dokan-lite' );
    }

    /**
     * Get section products.
     *
     * @since 3.3.7
     *
     * @return \WP_Query
     */
    public function get_products( $vendor_id ) {
        return dokan_get_best_selling_products( $this->item_count, $vendor_id );
    }
}
