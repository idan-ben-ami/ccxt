<?php
namespace ccxt;
use \ccxt\Precise;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
include_once __DIR__ . '/test_shared_methods.php';

function test_leverage_tier($exchange, $method, $entry) {
    $format = array(
        'tier' => $exchange->parse_number('1'),
        'minNotional' => $exchange->parse_number('0'),
        'maxNotional' => $exchange->parse_number('5000'),
        'maintenanceMarginRate' => $exchange->parse_number('0.01'),
        'maxLeverage' => $exchange->parse_number('25'),
        'info' => array(),
    );
    $empty_not_allowed_for = ['maxLeverage', ' info'];
    assert_structure($exchange, $method, $entry, $format, $empty_not_allowed_for);
    //
    assert_greater_or_equal($exchange, $method, $entry, 'tier', '0');
    assert_greater_or_equal($exchange, $method, $entry, 'minNotional', '0');
    assert_greater_or_equal($exchange, $method, $entry, 'maxNotional', '0');
    assert_greater_or_equal($exchange, $method, $entry, 'maxLeverage', '1');
    assert_less_or_equal($exchange, $method, $entry, 'maintenanceMarginRate', '1');
}
